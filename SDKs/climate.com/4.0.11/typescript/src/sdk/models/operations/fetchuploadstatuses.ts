import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FetchUploadStatusesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class FetchUploadStatusesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2AuthorizationCode: shared.SchemeOauth2AuthorizationCode;
}


export class FetchUploadStatusesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FetchUploadStatusesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FetchUploadStatusesSecurityOption2;
}


export class FetchUploadStatusesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UploadStatusQuery;

  @Metadata()
  security: FetchUploadStatusesSecurity;
}


export class FetchUploadStatusesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  uploadStatuses?: shared.UploadStatuses;
}
