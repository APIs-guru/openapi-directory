import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterRdsDbInstanceXAmzTargetEnum {
    OpsWorks20130218DeregisterRdsDbInstance = "OpsWorks_20130218.DeregisterRdsDbInstance"
}
export declare class DeregisterRdsDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterRdsDbInstanceXAmzTargetEnum;
}
export declare class DeregisterRdsDbInstanceRequest extends SpeakeasyBase {
    headers: DeregisterRdsDbInstanceHeaders;
    request: shared.DeregisterRdsDbInstanceRequest;
}
export declare class DeregisterRdsDbInstanceResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
