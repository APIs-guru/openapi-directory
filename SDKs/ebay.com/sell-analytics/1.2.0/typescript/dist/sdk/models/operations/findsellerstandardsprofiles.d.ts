import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindSellerStandardsProfilesSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class FindSellerStandardsProfilesRequest extends SpeakeasyBase {
    security: FindSellerStandardsProfilesSecurity;
}
export declare class FindSellerStandardsProfilesResponse extends SpeakeasyBase {
    contentType: string;
    findSellerStandardsProfilesResponse?: shared.FindSellerStandardsProfilesResponse;
    statusCode: number;
}
