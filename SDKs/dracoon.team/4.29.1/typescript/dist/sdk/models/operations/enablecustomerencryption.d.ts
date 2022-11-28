import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnableCustomerEncryptionHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class EnableCustomerEncryptionRequest extends SpeakeasyBase {
    headers: EnableCustomerEncryptionHeaders;
    request: shared.EnableCustomerEncryptionRequest;
}
export declare class EnableCustomerEncryptionResponse extends SpeakeasyBase {
    contentType: string;
    customerData?: shared.CustomerData;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
