import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostUploadHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Recipient-Email" })
  xRecipientEmail?: string;
}


export class PostUploadSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class PostUploadSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class PostUploadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostUploadSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostUploadSecurityOption2;
}


export class PostUploadRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostUploadHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Upload;

  @Metadata()
  security: PostUploadSecurity;
}


export class PostUploadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createdUpload?: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
