import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfileWithIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetProfileWithIdQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetProfileWithIdSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetProfileWithIdRequest extends SpeakeasyBase {
    pathParams: GetProfileWithIdPathParams;
    queryParams: GetProfileWithIdQueryParams;
    security: GetProfileWithIdSecurity;
}
export declare class GetProfileWithIdResponse extends SpeakeasyBase {
    contentType: string;
    profileSummary?: shared.ProfileSummary;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
