import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetKycSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetKycRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetKycSecurity;
}


export class GetKycResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  kycResponse?: shared.KycResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
