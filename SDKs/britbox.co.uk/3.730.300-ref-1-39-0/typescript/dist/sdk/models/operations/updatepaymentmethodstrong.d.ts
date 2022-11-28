import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePaymentMethodStrongPathParams extends SpeakeasyBase {
    platform: string;
}
export declare class UpdatePaymentMethodStrongQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class UpdatePaymentMethodStrongSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class UpdatePaymentMethodStrongRequest extends SpeakeasyBase {
    pathParams: UpdatePaymentMethodStrongPathParams;
    queryParams: UpdatePaymentMethodStrongQueryParams;
    request: shared.ItvUpdatePaymentStrongRequest;
    security: UpdatePaymentMethodStrongSecurity;
}
export declare class UpdatePaymentMethodStrongResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
