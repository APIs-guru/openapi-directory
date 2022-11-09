import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListOfSelfUploadedDocumentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetListOfSelfUploadedDocumentsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetListOfSelfUploadedDocumentsSecurity;
}


export class GetListOfSelfUploadedDocuments401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfSelfUploadedDocuments404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfSelfUploadedDocuments500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfSelfUploadedDocumentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getListOfSelfUploadedDocuments401ApplicationJsonObject?: GetListOfSelfUploadedDocuments401ApplicationJson;

  @Metadata()
  getListOfSelfUploadedDocuments404ApplicationJsonObject?: GetListOfSelfUploadedDocuments404ApplicationJson;

  @Metadata()
  getListOfSelfUploadedDocuments500ApplicationJsonObject?: GetListOfSelfUploadedDocuments500ApplicationJson;

  @Metadata()
  sample?: any;

  @Metadata()
  statusCode: number;
}
