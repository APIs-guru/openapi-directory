import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetKycSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetKycRequest extends SpeakeasyBase {
    security: GetKycSecurity;
}
export declare class GetKycResponse extends SpeakeasyBase {
    contentType: string;
    kycResponse?: shared.KycResponse;
    statusCode: number;
}
