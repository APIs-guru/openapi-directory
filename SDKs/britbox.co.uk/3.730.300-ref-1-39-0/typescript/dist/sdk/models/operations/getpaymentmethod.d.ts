import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentMethodPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPaymentMethodQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetPaymentMethodSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetPaymentMethodRequest extends SpeakeasyBase {
    pathParams: GetPaymentMethodPathParams;
    queryParams: GetPaymentMethodQueryParams;
    security: GetPaymentMethodSecurity;
}
export declare class GetPaymentMethodResponse extends SpeakeasyBase {
    contentType: string;
    paymentMethod?: shared.PaymentMethod;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
