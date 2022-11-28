import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AssignTokenQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class AssignTokenSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class AssignTokenRequest extends SpeakeasyBase {
    queryParams: AssignTokenQueryParams;
    request: shared.ItvAssignBtTokenRequest;
    security: AssignTokenSecurity;
}
export declare class AssignTokenResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
