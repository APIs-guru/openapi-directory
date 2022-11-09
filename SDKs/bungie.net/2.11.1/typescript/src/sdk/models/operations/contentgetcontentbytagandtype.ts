import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentGetContentByTagAndTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=locale" })
  locale: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=tag" })
  tag: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class ContentGetContentByTagAndTypeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=head" })
  head?: boolean;
}


export class ContentGetContentByTagAndTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentGetContentByTagAndTypePathParams;

  @Metadata()
  queryParams: ContentGetContentByTagAndTypeQueryParams;
}


export class ContentGetContentByTagAndTypeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
