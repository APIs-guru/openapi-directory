import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListOfSelfUploadedDocumentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListOfSelfUploadedDocumentsIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearerAuth: shared.SchemeBearerAuth;
}


export class GetListOfSelfUploadedDocumentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListOfSelfUploadedDocumentsIdPathParams;

  @Metadata()
  security: GetListOfSelfUploadedDocumentsIdSecurity;
}


export class GetListOfSelfUploadedDocumentsId401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfSelfUploadedDocumentsId404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfSelfUploadedDocumentsId500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=error_description" })
  errorDescription?: string;
}


export class GetListOfSelfUploadedDocumentsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getListOfSelfUploadedDocumentsId401ApplicationJsonObject?: GetListOfSelfUploadedDocumentsId401ApplicationJson;

  @Metadata()
  getListOfSelfUploadedDocumentsId404ApplicationJsonObject?: GetListOfSelfUploadedDocumentsId404ApplicationJson;

  @Metadata()
  getListOfSelfUploadedDocumentsId500ApplicationJsonObject?: GetListOfSelfUploadedDocumentsId500ApplicationJson;

  @Metadata()
  sample?: any;

  @Metadata()
  statusCode: number;
}
