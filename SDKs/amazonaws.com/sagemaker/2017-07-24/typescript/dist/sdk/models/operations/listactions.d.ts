import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListActionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListActionsXAmzTargetEnum {
    SageMakerListActions = "SageMaker.ListActions"
}
export declare class ListActionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListActionsXAmzTargetEnum;
}
export declare class ListActionsRequest extends SpeakeasyBase {
    queryParams: ListActionsQueryParams;
    headers: ListActionsHeaders;
    request: shared.ListActionsRequest;
}
export declare class ListActionsResponse extends SpeakeasyBase {
    contentType: string;
    listActionsResponse?: shared.ListActionsResponse;
    resourceNotFound?: any;
    statusCode: number;
}
