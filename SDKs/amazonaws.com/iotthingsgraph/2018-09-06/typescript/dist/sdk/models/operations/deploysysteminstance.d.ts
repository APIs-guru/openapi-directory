import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeploySystemInstanceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceDeploySystemInstance = "IotThingsGraphFrontEndService.DeploySystemInstance"
}
export declare class DeploySystemInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeploySystemInstanceXAmzTargetEnum;
}
export declare class DeploySystemInstanceRequest extends SpeakeasyBase {
    headers: DeploySystemInstanceHeaders;
    request: shared.DeploySystemInstanceRequest;
}
export declare class DeploySystemInstanceResponse extends SpeakeasyBase {
    contentType: string;
    deploySystemInstanceResponse?: shared.DeploySystemInstanceResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
