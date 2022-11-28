import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestCustomerInfoHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestCustomerInfoRequest extends SpeakeasyBase {
    headers: RequestCustomerInfoHeaders;
}
export declare class RequestCustomerInfoResponse extends SpeakeasyBase {
    contentType: string;
    customerData?: shared.CustomerData;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
