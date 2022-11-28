import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentGetContentByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=locale" })
  locale: string;
}


export class ContentGetContentByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=head" })
  head?: boolean;
}


export class ContentGetContentByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ContentGetContentByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: ContentGetContentByIdQueryParams;
}


export class ContentGetContentByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
