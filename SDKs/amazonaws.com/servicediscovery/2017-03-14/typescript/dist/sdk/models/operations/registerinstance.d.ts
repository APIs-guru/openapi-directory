import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RegisterInstanceXAmzTargetEnum {
    Route53AutoNamingV20170314RegisterInstance = "Route53AutoNaming_v20170314.RegisterInstance"
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
    duplicateRequest?: any;
    invalidInput?: any;
    registerInstanceResponse?: shared.RegisterInstanceResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    serviceNotFound?: any;
    statusCode: number;
}
