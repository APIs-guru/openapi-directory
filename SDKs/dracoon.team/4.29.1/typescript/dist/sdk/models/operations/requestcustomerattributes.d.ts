import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestCustomerAttributesPathParams extends SpeakeasyBase {
    customerId: number;
}
export declare class RequestCustomerAttributesQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestCustomerAttributesHeaders extends SpeakeasyBase {
    xSdsServiceToken?: string;
}
export declare class RequestCustomerAttributesRequest extends SpeakeasyBase {
    pathParams: RequestCustomerAttributesPathParams;
    queryParams: RequestCustomerAttributesQueryParams;
    headers: RequestCustomerAttributesHeaders;
}
export declare class RequestCustomerAttributesResponse extends SpeakeasyBase {
    attributesResponse?: shared.AttributesResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
