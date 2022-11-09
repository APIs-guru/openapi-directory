import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListRouteCalculatorsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListRouteCalculatorsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListRouteCalculatorsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListRouteCalculatorsRequest extends SpeakeasyBase {
    queryParams: ListRouteCalculatorsQueryParams;
    headers: ListRouteCalculatorsHeaders;
    request: ListRouteCalculatorsRequestBody;
}
export declare class ListRouteCalculatorsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listRouteCalculatorsResponse?: shared.ListRouteCalculatorsResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
