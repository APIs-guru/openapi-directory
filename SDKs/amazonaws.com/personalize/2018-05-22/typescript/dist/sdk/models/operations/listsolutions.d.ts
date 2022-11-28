import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSolutionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListSolutionsXAmzTargetEnum {
    AmazonPersonalizeListSolutions = "AmazonPersonalize.ListSolutions"
}
export declare class ListSolutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSolutionsXAmzTargetEnum;
}
export declare class ListSolutionsRequest extends SpeakeasyBase {
    queryParams: ListSolutionsQueryParams;
    headers: ListSolutionsHeaders;
    request: shared.ListSolutionsRequest;
}
export declare class ListSolutionsResponse extends SpeakeasyBase {
    contentType: string;
    invalidInputException?: any;
    invalidNextTokenException?: any;
    listSolutionsResponse?: shared.ListSolutionsResponse;
    statusCode: number;
}
