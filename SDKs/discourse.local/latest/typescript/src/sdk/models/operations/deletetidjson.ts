import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteTIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteTIdJsonHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Key" })
  apiKey: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Api-Username" })
  apiUsername: string;
}


export class DeleteTIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteTIdJsonPathParams;

  @Metadata()
  headers: DeleteTIdJsonHeaders;
}


export class DeleteTIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
