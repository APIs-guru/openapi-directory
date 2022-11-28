import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestCustomerKeyPairHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestCustomerKeyPairRequest extends SpeakeasyBase {
    headers: RequestCustomerKeyPairHeaders;
}
export declare class RequestCustomerKeyPairResponseOutput extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    userKeyPairContainer?: shared.UserKeyPairContainerOutput;
}
