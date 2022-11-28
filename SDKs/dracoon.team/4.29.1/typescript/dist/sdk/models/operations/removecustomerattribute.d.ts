import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveCustomerAttributePathParams extends SpeakeasyBase {
    customerId: number;
    key: string;
}
export declare class RemoveCustomerAttributeHeaders extends SpeakeasyBase {
    xSdsServiceToken?: string;
}
export declare class RemoveCustomerAttributeRequest extends SpeakeasyBase {
    pathParams: RemoveCustomerAttributePathParams;
    headers: RemoveCustomerAttributeHeaders;
}
export declare class RemoveCustomerAttributeResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
