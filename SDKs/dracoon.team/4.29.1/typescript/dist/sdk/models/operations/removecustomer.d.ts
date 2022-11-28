import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveCustomerPathParams extends SpeakeasyBase {
    customerId: number;
}
export declare class RemoveCustomerHeaders extends SpeakeasyBase {
    xSdsServiceToken?: string;
}
export declare class RemoveCustomerRequest extends SpeakeasyBase {
    pathParams: RemoveCustomerPathParams;
    headers: RemoveCustomerHeaders;
}
export declare class RemoveCustomerResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
