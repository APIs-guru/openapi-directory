import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetCustomerAttributesPathParams extends SpeakeasyBase {
    customerId: number;
}
export declare class SetCustomerAttributesHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
    xSdsServiceToken?: string;
}
export declare class SetCustomerAttributesRequest extends SpeakeasyBase {
    pathParams: SetCustomerAttributesPathParams;
    headers: SetCustomerAttributesHeaders;
    request: shared.CustomerAttributes;
}
export declare class SetCustomerAttributesResponse extends SpeakeasyBase {
    contentType: string;
    customer?: shared.Customer;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
