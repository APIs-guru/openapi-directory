import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SuppressViolationSecurity extends SpeakeasyBase {
    apiAuth: shared.SchemeApiAuth;
}
export declare class SuppressViolationRequest extends SpeakeasyBase {
    request: shared.SuppressViolationRequest;
    security: SuppressViolationSecurity;
}
export declare class SuppressViolationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
