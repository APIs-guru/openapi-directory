import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListSolutionVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListSolutionVersionsXAmzTargetEnum {
    AmazonPersonalizeListSolutionVersions = "AmazonPersonalize.ListSolutionVersions"
}
export declare class ListSolutionVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSolutionVersionsXAmzTargetEnum;
}
export declare class ListSolutionVersionsRequest extends SpeakeasyBase {
    queryParams: ListSolutionVersionsQueryParams;
    headers: ListSolutionVersionsHeaders;
    request: shared.ListSolutionVersionsRequest;
}
export declare class ListSolutionVersionsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    invalidNextTokenException?: any;
    listSolutionVersionsResponse?: shared.ListSolutionVersionsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
