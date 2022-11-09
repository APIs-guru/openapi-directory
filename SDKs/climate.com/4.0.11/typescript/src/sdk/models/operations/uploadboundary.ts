import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UploadBoundarySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class UploadBoundarySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class UploadBoundarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UploadBoundarySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UploadBoundarySecurityOption2;
}


export class UploadBoundaryRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: UploadBoundarySecurity;
}


export class UploadBoundaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  uploadedBoundaryId?: any;
}
