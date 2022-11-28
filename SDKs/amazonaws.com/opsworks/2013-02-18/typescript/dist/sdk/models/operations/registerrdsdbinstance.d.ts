import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterRdsDbInstanceXAmzTargetEnum {
    OpsWorks20130218RegisterRdsDbInstance = "OpsWorks_20130218.RegisterRdsDbInstance"
}
export declare class RegisterRdsDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterRdsDbInstanceXAmzTargetEnum;
}
export declare class RegisterRdsDbInstanceRequest extends SpeakeasyBase {
    headers: RegisterRdsDbInstanceHeaders;
    request: shared.RegisterRdsDbInstanceRequest;
}
export declare class RegisterRdsDbInstanceResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
