import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCustomerPathParams extends SpeakeasyBase {
    customerId: number;
}
export declare class UpdateCustomerHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
    xSdsServiceToken?: string;
}
export declare class UpdateCustomerRequest extends SpeakeasyBase {
    pathParams: UpdateCustomerPathParams;
    headers: UpdateCustomerHeaders;
    request: shared.UpdateCustomerRequest;
}
export declare class UpdateCustomerResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    updateCustomerResponse?: shared.UpdateCustomerResponse;
}
