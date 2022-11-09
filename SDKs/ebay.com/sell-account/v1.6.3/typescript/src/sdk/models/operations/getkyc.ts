import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetKycSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetKycRequest extends SpeakeasyBase {
  @Metadata()
  security: GetKycSecurity;
}


export class GetKycResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  kycResponse?: shared.KycResponse;

  @Metadata()
  statusCode: number;
}
