import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UndeploySystemInstanceXAmzTargetEnum {
    IotThingsGraphFrontEndServiceUndeploySystemInstance = "IotThingsGraphFrontEndService.UndeploySystemInstance"
}
export declare class UndeploySystemInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UndeploySystemInstanceXAmzTargetEnum;
}
export declare class UndeploySystemInstanceRequest extends SpeakeasyBase {
    headers: UndeploySystemInstanceHeaders;
    request: shared.UndeploySystemInstanceRequest;
}
export declare class UndeploySystemInstanceResponse extends SpeakeasyBase {
    contentType: string;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    undeploySystemInstanceResponse?: shared.UndeploySystemInstanceResponse;
}
