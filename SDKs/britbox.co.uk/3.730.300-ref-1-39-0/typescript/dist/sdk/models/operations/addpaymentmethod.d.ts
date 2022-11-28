import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddPaymentMethodQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class AddPaymentMethodSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class AddPaymentMethodRequest extends SpeakeasyBase {
    queryParams: AddPaymentMethodQueryParams;
    request: shared.AddPaymentMethodRequest;
    security: AddPaymentMethodSecurity;
}
export declare class AddPaymentMethodResponse extends SpeakeasyBase {
    contentType: string;
    paymentMethod?: shared.PaymentMethod;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
