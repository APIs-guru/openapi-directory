import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterInstanceXAmzTargetEnum {
    OpsWorks20130218DeregisterInstance = "OpsWorks_20130218.DeregisterInstance"
}
export declare class DeregisterInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterInstanceXAmzTargetEnum;
}
export declare class DeregisterInstanceRequest extends SpeakeasyBase {
    headers: DeregisterInstanceHeaders;
    request: shared.DeregisterInstanceRequest;
}
export declare class DeregisterInstanceResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
