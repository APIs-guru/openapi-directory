import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum ListHumanLoopsSortOrderEnum {
    Ascending = "Ascending",
    Descending = "Descending"
}
export declare class ListHumanLoopsQueryParams extends SpeakeasyBase {
    creationTimeAfter?: Date;
    creationTimeBefore?: Date;
    flowDefinitionArn: string;
    maxResults?: number;
    nextToken?: string;
    sortOrder?: ListHumanLoopsSortOrderEnum;
}
export declare class ListHumanLoopsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListHumanLoopsRequest extends SpeakeasyBase {
    queryParams: ListHumanLoopsQueryParams;
    headers: ListHumanLoopsHeaders;
}
export declare class ListHumanLoopsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    listHumanLoopsResponse?: shared.ListHumanLoopsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
