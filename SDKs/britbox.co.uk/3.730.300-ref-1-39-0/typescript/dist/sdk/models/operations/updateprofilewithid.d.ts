import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProfileWithIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateProfileWithIdQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class UpdateProfileWithIdSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class UpdateProfileWithIdRequest extends SpeakeasyBase {
    pathParams: UpdateProfileWithIdPathParams;
    queryParams: UpdateProfileWithIdQueryParams;
    request: shared.ProfileUpdateRequest;
    security: UpdateProfileWithIdSecurity;
}
export declare class UpdateProfileWithIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
