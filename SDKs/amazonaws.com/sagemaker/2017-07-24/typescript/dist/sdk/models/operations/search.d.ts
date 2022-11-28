import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SearchQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum SearchXAmzTargetEnum {
    SageMakerSearch = "SageMaker.Search"
}
export declare class SearchHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SearchXAmzTargetEnum;
}
export declare class SearchRequest extends SpeakeasyBase {
    queryParams: SearchQueryParams;
    headers: SearchHeaders;
    request: shared.SearchRequest;
}
export declare class SearchResponse extends SpeakeasyBase {
    contentType: string;
    searchResponse?: shared.SearchResponse;
    statusCode: number;
}
