import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutTIdBookmarkJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutTIdBookmarkJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class PutTIdBookmarkJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutTIdBookmarkJsonPathParams;

  @Metadata()
  headers: PutTIdBookmarkJsonHeaders;
}


export class PutTIdBookmarkJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
