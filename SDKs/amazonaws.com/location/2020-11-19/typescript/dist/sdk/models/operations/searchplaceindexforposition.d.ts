import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchPlaceIndexForPositionPathParams extends SpeakeasyBase {
    indexName: string;
}
export declare class SearchPlaceIndexForPositionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SearchPlaceIndexForPositionRequestBody extends SpeakeasyBase {
    maxResults?: number;
    position: number[];
}
export declare class SearchPlaceIndexForPositionRequest extends SpeakeasyBase {
    pathParams: SearchPlaceIndexForPositionPathParams;
    headers: SearchPlaceIndexForPositionHeaders;
    request: SearchPlaceIndexForPositionRequestBody;
}
export declare class SearchPlaceIndexForPositionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    searchPlaceIndexForPositionResponse?: shared.SearchPlaceIndexForPositionResponse;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
