import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteStateMachineXAmzTargetEnum {
    AwsStepFunctionsDeleteStateMachine = "AWSStepFunctions.DeleteStateMachine"
}
export declare class DeleteStateMachineHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteStateMachineXAmzTargetEnum;
}
export declare class DeleteStateMachineRequest extends SpeakeasyBase {
    headers: DeleteStateMachineHeaders;
    request: shared.DeleteStateMachineInput;
}
export declare class DeleteStateMachineResponse extends SpeakeasyBase {
    contentType: string;
    deleteStateMachineOutput?: Map<string, any>;
    invalidArn?: any;
    statusCode: number;
}
