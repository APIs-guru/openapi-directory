import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListResourceTypesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListResourceTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListResourceTypesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListResourceTypesRequest extends SpeakeasyBase {
    queryParams: ListResourceTypesQueryParams;
    headers: ListResourceTypesHeaders;
    request: ListResourceTypesRequestBody;
}
export declare class ListResourceTypesResponse extends SpeakeasyBase {
    contentType: string;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    listResourceTypesResponse?: shared.ListResourceTypesResponse;
    serverInternalException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
}
