import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterInstanceXAmzTargetEnum {
    OpsWorks20130218RegisterInstance = "OpsWorks_20130218.RegisterInstance"
}
export declare class RegisterInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterInstanceXAmzTargetEnum;
}
export declare class RegisterInstanceRequest extends SpeakeasyBase {
    headers: RegisterInstanceHeaders;
    request: shared.RegisterInstanceRequest;
}
export declare class RegisterInstanceResponse extends SpeakeasyBase {
    contentType: string;
    registerInstanceResult?: shared.RegisterInstanceResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
