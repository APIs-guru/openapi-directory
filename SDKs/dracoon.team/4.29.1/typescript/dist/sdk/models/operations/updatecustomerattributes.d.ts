import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCustomerAttributesPathParams extends SpeakeasyBase {
    customerId: number;
}
export declare class UpdateCustomerAttributesHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
    xSdsServiceToken?: string;
}
export declare class UpdateCustomerAttributesRequest extends SpeakeasyBase {
    pathParams: UpdateCustomerAttributesPathParams;
    headers: UpdateCustomerAttributesHeaders;
    request: shared.CustomerAttributes;
}
export declare class UpdateCustomerAttributesResponse extends SpeakeasyBase {
    contentType: string;
    customer?: shared.Customer;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
