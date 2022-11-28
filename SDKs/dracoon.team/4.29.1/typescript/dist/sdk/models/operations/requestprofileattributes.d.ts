import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestProfileAttributesQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
    sort?: string;
}
export declare class RequestProfileAttributesHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestProfileAttributesRequest extends SpeakeasyBase {
    queryParams: RequestProfileAttributesQueryParams;
    headers: RequestProfileAttributesHeaders;
}
export declare class RequestProfileAttributesResponse extends SpeakeasyBase {
    attributesResponse?: shared.AttributesResponse;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
