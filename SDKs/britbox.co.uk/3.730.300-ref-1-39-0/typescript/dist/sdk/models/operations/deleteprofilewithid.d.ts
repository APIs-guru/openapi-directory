import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProfileWithIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteProfileWithIdQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class DeleteProfileWithIdSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class DeleteProfileWithIdRequest extends SpeakeasyBase {
    pathParams: DeleteProfileWithIdPathParams;
    queryParams: DeleteProfileWithIdQueryParams;
    security: DeleteProfileWithIdSecurity;
}
export declare class DeleteProfileWithIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
