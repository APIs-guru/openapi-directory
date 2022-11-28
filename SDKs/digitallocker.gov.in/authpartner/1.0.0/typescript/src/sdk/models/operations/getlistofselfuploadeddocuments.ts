import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListOfSelfUploadedDocumentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetListOfSelfUploadedDocuments401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfSelfUploadedDocuments404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfSelfUploadedDocuments500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfSelfUploadedDocumentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetListOfSelfUploadedDocumentsSecurity;
}


export class GetListOfSelfUploadedDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getListOfSelfUploadedDocuments401ApplicationJsonObject?: GetListOfSelfUploadedDocuments401ApplicationJson;

  @SpeakeasyMetadata()
  getListOfSelfUploadedDocuments404ApplicationJsonObject?: GetListOfSelfUploadedDocuments404ApplicationJson;

  @SpeakeasyMetadata()
  getListOfSelfUploadedDocuments500ApplicationJsonObject?: GetListOfSelfUploadedDocuments500ApplicationJson;

  @SpeakeasyMetadata()
  sample?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
