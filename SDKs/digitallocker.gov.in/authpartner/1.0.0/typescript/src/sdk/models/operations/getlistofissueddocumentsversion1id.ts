import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListOfIssuedDocumentsVersion1IdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetListOfIssuedDocumentsVersion1IdRequest extends SpeakeasyBase {
  @Metadata()
  security: GetListOfIssuedDocumentsVersion1IdSecurity;
}


export class GetListOfIssuedDocumentsVersion1Id401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfIssuedDocumentsVersion1IdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getListOfIssuedDocumentsVersion1Id401ApplicationJsonObject?: GetListOfIssuedDocumentsVersion1Id401ApplicationJson;

  @Metadata()
  getListOfIssuedDocumentsVersion1Id500ApplicationJsonOneOf?: any;

  @Metadata()
  sample?: any;

  @Metadata()
  statusCode: number;
}
