import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetCommandInvocationXAmzTargetEnum {
    AmazonSsmGetCommandInvocation = "AmazonSSM.GetCommandInvocation"
}
export declare class GetCommandInvocationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetCommandInvocationXAmzTargetEnum;
}
export declare class GetCommandInvocationRequest extends SpeakeasyBase {
    headers: GetCommandInvocationHeaders;
    request: shared.GetCommandInvocationRequest;
}
export declare class GetCommandInvocationResponse extends SpeakeasyBase {
    contentType: string;
    getCommandInvocationResult?: shared.GetCommandInvocationResult;
    internalServerError?: any;
    invalidCommandId?: any;
    invalidInstanceId?: any;
    invalidPluginName?: any;
    invocationDoesNotExist?: any;
    statusCode: number;
}
