import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpgradePlanPathParams extends SpeakeasyBase {
    platform: string;
}
export declare class UpgradePlanQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class UpgradePlanSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class UpgradePlanRequest extends SpeakeasyBase {
    pathParams: UpgradePlanPathParams;
    queryParams: UpgradePlanQueryParams;
    request: shared.ItvUpgradePlanRequest;
    security: UpgradePlanSecurity;
}
export declare class UpgradePlanResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
