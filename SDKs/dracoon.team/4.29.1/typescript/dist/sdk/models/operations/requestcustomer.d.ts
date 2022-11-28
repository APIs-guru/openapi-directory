import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestCustomerPathParams extends SpeakeasyBase {
    customerId: number;
}
export declare class RequestCustomerQueryParams extends SpeakeasyBase {
    includeAttributes?: boolean;
}
export declare class RequestCustomerHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
    xSdsServiceToken?: string;
}
export declare class RequestCustomerRequest extends SpeakeasyBase {
    pathParams: RequestCustomerPathParams;
    queryParams: RequestCustomerQueryParams;
    headers: RequestCustomerHeaders;
}
export declare class RequestCustomerResponse extends SpeakeasyBase {
    contentType: string;
    customer?: shared.Customer;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
