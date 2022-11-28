import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemovePaymentMethodPathParams extends SpeakeasyBase {
    id: string;
}
export declare class RemovePaymentMethodQueryParams extends SpeakeasyBase {
    ff?: shared.FeatureFlagsEnum[];
    lang?: string;
}
export declare class RemovePaymentMethodSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class RemovePaymentMethodRequest extends SpeakeasyBase {
    pathParams: RemovePaymentMethodPathParams;
    queryParams: RemovePaymentMethodQueryParams;
    security: RemovePaymentMethodSecurity;
}
export declare class RemovePaymentMethodResponse extends SpeakeasyBase {
    contentType: string;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
