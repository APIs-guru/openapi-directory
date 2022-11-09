import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListPlaceIndexesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListPlaceIndexesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPlaceIndexesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListPlaceIndexesRequest extends SpeakeasyBase {
    queryParams: ListPlaceIndexesQueryParams;
    headers: ListPlaceIndexesHeaders;
    request: ListPlaceIndexesRequestBody;
}
export declare class ListPlaceIndexesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listPlaceIndexesResponse?: shared.ListPlaceIndexesResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
