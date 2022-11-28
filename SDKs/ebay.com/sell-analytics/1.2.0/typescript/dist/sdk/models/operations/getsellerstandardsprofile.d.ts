import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSellerStandardsProfilePathParams extends SpeakeasyBase {
    cycle: string;
    program: string;
}
export declare class GetSellerStandardsProfileSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class GetSellerStandardsProfileRequest extends SpeakeasyBase {
    pathParams: GetSellerStandardsProfilePathParams;
    security: GetSellerStandardsProfileSecurity;
}
export declare class GetSellerStandardsProfileResponse extends SpeakeasyBase {
    contentType: string;
    standardsProfile?: shared.StandardsProfile;
    statusCode: number;
}
