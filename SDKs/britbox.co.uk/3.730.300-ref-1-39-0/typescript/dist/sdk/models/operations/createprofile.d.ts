import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProfileQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class CreateProfileSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class CreateProfileRequest extends SpeakeasyBase {
    queryParams: CreateProfileQueryParams;
    request: shared.ProfileCreationRequest;
    security: CreateProfileSecurity;
}
export declare class CreateProfileResponse extends SpeakeasyBase {
    contentType: string;
    profileDetail?: shared.ProfileDetail;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
