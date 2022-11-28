import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListActivitiesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListActivitiesXAmzTargetEnum {
    AwsStepFunctionsListActivities = "AWSStepFunctions.ListActivities"
}
export declare class ListActivitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListActivitiesXAmzTargetEnum;
}
export declare class ListActivitiesRequest extends SpeakeasyBase {
    queryParams: ListActivitiesQueryParams;
    headers: ListActivitiesHeaders;
    request: shared.ListActivitiesInput;
}
export declare class ListActivitiesResponse extends SpeakeasyBase {
    contentType: string;
    invalidToken?: any;
    listActivitiesOutput?: shared.ListActivitiesOutput;
    statusCode: number;
}
