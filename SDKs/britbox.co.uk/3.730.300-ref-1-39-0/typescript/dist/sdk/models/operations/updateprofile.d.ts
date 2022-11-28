import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProfileQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class UpdateProfileSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class UpdateProfileRequest extends SpeakeasyBase {
    queryParams: UpdateProfileQueryParams;
    request: shared.ItvUpdateProfileRequest;
    security: UpdateProfileSecurity;
}
export declare class UpdateProfileResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
