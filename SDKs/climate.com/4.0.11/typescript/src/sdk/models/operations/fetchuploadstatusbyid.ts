import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FetchUploadStatusByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=uploadId" })
  uploadId: string;
}


export class FetchUploadStatusByIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class FetchUploadStatusByIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class FetchUploadStatusByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FetchUploadStatusByIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FetchUploadStatusByIdSecurityOption2;
}


export class FetchUploadStatusByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FetchUploadStatusByIdPathParams;

  @Metadata()
  security: FetchUploadStatusByIdSecurity;
}


export class FetchUploadStatusByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  uploadStatus?: shared.UploadStatus;
}
