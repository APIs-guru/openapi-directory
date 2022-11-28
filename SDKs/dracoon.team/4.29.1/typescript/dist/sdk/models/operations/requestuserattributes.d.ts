import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestUserAttributesPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class RequestUserAttributesQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestUserAttributesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestUserAttributesRequest extends SpeakeasyBase {
    pathParams: RequestUserAttributesPathParams;
    queryParams: RequestUserAttributesQueryParams;
    headers: RequestUserAttributesHeaders;
}
export declare class RequestUserAttributesResponse extends SpeakeasyBase {
    attributesResponse?: shared.AttributesResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
