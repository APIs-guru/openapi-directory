import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdatePaymentIntentStrongPathParams extends SpeakeasyBase {
    platform: string;
}
export declare class UpdatePaymentIntentStrongQueryParams extends SpeakeasyBase {
    lang?: string;
}
export declare class UpdatePaymentIntentStrongSecurity extends SpeakeasyBase {
    accountAuth: shared.SchemeAccountAuth;
}
export declare class UpdatePaymentIntentStrongRequest extends SpeakeasyBase {
    pathParams: UpdatePaymentIntentStrongPathParams;
    queryParams: UpdatePaymentIntentStrongQueryParams;
    request: shared.ItvUpdateIntentStrongRequest;
    security: UpdatePaymentIntentStrongSecurity;
}
export declare class UpdatePaymentIntentStrongResponse extends SpeakeasyBase {
    contentType: string;
    itvUpdateIntentStrongResponse?: shared.ItvUpdateIntentStrongResponse;
    serviceError?: shared.ServiceError;
    statusCode: number;
}
