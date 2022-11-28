import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCustomerHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
    xSdsServiceToken?: string;
}
export declare class CreateCustomerRequest extends SpeakeasyBase {
    headers: CreateCustomerHeaders;
    request: shared.NewCustomerRequest;
}
export declare class CreateCustomerResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    newCustomerResponse?: shared.NewCustomerResponse;
    statusCode: number;
    createCustomer400ApplicationJsonOneOf?: any;
}
