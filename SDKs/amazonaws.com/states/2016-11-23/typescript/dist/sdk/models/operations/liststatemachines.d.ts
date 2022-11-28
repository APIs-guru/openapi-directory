import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListStateMachinesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListStateMachinesXAmzTargetEnum {
    AwsStepFunctionsListStateMachines = "AWSStepFunctions.ListStateMachines"
}
export declare class ListStateMachinesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListStateMachinesXAmzTargetEnum;
}
export declare class ListStateMachinesRequest extends SpeakeasyBase {
    queryParams: ListStateMachinesQueryParams;
    headers: ListStateMachinesHeaders;
    request: shared.ListStateMachinesInput;
}
export declare class ListStateMachinesResponse extends SpeakeasyBase {
    contentType: string;
    invalidToken?: any;
    listStateMachinesOutput?: shared.ListStateMachinesOutput;
    statusCode: number;
}
