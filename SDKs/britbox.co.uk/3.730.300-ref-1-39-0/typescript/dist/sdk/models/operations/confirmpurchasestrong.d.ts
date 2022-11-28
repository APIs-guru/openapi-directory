import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ConfirmPurchaseStrongPathParams extends SpeakeasyBase {
    platform: string;
}
export declare class ConfirmPurchaseStrongQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class ConfirmPurchaseStrongSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class ConfirmPurchaseStrongRequest extends SpeakeasyBase {
    pathParams: ConfirmPurchaseStrongPathParams;
    queryParams: ConfirmPurchaseStrongQueryParams;
    request: shared.ItvPurchaseStrongRequest;
    security: ConfirmPurchaseStrongSecurity;
}
export declare class ConfirmPurchaseStrongResponse extends SpeakeasyBase {
    contentType: string;
    itvPurchaseStrongResponse?: shared.ItvPurchaseStrongResponse;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
