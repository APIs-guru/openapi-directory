import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPaymentMethodsQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class GetPaymentMethodsSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class GetPaymentMethodsRequest extends SpeakeasyBase {
    queryParams: GetPaymentMethodsQueryParams;
    security: GetPaymentMethodsSecurity;
}
export declare class GetPaymentMethodsResponse extends SpeakeasyBase {
    contentType: string;
    paymentMethods?: shared.PaymentMethod[];
    serviceError?: shared.ServiceError;
    statusCode: number;
}
