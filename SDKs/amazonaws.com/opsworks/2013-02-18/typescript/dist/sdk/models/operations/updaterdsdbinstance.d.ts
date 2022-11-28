import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateRdsDbInstanceXAmzTargetEnum {
    OpsWorks20130218UpdateRdsDbInstance = "OpsWorks_20130218.UpdateRdsDbInstance"
}
export declare class UpdateRdsDbInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateRdsDbInstanceXAmzTargetEnum;
}
export declare class UpdateRdsDbInstanceRequest extends SpeakeasyBase {
    headers: UpdateRdsDbInstanceHeaders;
    request: shared.UpdateRdsDbInstanceRequest;
}
export declare class UpdateRdsDbInstanceResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
