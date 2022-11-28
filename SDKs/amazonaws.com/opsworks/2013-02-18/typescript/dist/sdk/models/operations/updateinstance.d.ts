import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateInstanceXAmzTargetEnum {
    OpsWorks20130218UpdateInstance = "OpsWorks_20130218.UpdateInstance"
}
export declare class UpdateInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateInstanceXAmzTargetEnum;
}
export declare class UpdateInstanceRequest extends SpeakeasyBase {
    headers: UpdateInstanceHeaders;
    request: shared.UpdateInstanceRequest;
}
export declare class UpdateInstanceResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
