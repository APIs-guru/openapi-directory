import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentGetContentTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
}


export class ContentGetContentTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentGetContentTypePathParams;
}


export class ContentGetContentTypeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
