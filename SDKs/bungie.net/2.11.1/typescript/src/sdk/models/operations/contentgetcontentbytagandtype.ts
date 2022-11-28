import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentGetContentByTagAndTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locale" })
  locale: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=tag" })
  tag: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class ContentGetContentByTagAndTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=head" })
  head?: boolean;
}


export class ContentGetContentByTagAndTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentGetContentByTagAndTypePathParams;

  @SpeakeasyMetadata()
  queryParams: ContentGetContentByTagAndTypeQueryParams;
}


export class ContentGetContentByTagAndTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
