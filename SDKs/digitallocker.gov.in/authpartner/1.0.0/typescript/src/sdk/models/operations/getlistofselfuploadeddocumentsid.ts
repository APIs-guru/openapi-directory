import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListOfSelfUploadedDocumentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListOfSelfUploadedDocumentsIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetListOfSelfUploadedDocumentsId401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfSelfUploadedDocumentsId404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfSelfUploadedDocumentsId500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfSelfUploadedDocumentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListOfSelfUploadedDocumentsIdPathParams;

  @SpeakeasyMetadata()
  security: GetListOfSelfUploadedDocumentsIdSecurity;
}


export class GetListOfSelfUploadedDocumentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getListOfSelfUploadedDocumentsId401ApplicationJsonObject?: GetListOfSelfUploadedDocumentsId401ApplicationJson;

  @SpeakeasyMetadata()
  getListOfSelfUploadedDocumentsId404ApplicationJsonObject?: GetListOfSelfUploadedDocumentsId404ApplicationJson;

  @SpeakeasyMetadata()
  getListOfSelfUploadedDocumentsId500ApplicationJsonObject?: GetListOfSelfUploadedDocumentsId500ApplicationJson;

  @SpeakeasyMetadata()
  sample?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
