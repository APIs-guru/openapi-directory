import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentGetContentByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=locale" })
  locale: string;
}


export class ContentGetContentByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=head" })
  head?: boolean;
}


export class ContentGetContentByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentGetContentByIdPathParams;

  @Metadata()
  queryParams: ContentGetContentByIdQueryParams;
}


export class ContentGetContentByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
