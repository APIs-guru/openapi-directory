import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListExecutionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListExecutionsXAmzTargetEnum {
    AwsStepFunctionsListExecutions = "AWSStepFunctions.ListExecutions"
}
export declare class ListExecutionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListExecutionsXAmzTargetEnum;
}
export declare class ListExecutionsRequest extends SpeakeasyBase {
    queryParams: ListExecutionsQueryParams;
    headers: ListExecutionsHeaders;
    request: shared.ListExecutionsInput;
}
export declare class ListExecutionsResponse extends SpeakeasyBase {
    contentType: string;
    invalidArn?: any;
    invalidToken?: any;
    listExecutionsOutput?: shared.ListExecutionsOutput;
    stateMachineDoesNotExist?: any;
    stateMachineTypeNotSupported?: any;
    statusCode: number;
}
