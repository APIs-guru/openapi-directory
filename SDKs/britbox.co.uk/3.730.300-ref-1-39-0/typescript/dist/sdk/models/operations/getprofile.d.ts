import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfileQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetProfileSecurity extends SpeakeasyBase {
    profileAuth: shared.SchemeProfileAuth;
}
export declare class GetProfileRequest extends SpeakeasyBase {
    queryParams: GetProfileQueryParams;
    security: GetProfileSecurity;
}
export declare class GetProfileResponse extends SpeakeasyBase {
    contentType: string;
    profileDetail?: shared.ProfileDetail;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
