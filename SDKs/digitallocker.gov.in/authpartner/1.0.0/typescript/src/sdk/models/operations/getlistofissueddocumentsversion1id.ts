import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListOfIssuedDocumentsVersion1IdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetListOfIssuedDocumentsVersion1Id401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfIssuedDocumentsVersion1IdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetListOfIssuedDocumentsVersion1IdSecurity;
}


export class GetListOfIssuedDocumentsVersion1IdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getListOfIssuedDocumentsVersion1Id401ApplicationJsonObject?: GetListOfIssuedDocumentsVersion1Id401ApplicationJson;

  @SpeakeasyMetadata()
  getListOfIssuedDocumentsVersion1Id500ApplicationJsonOneOf?: any;

  @SpeakeasyMetadata()
  sample?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
