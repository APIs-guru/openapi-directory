import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StartInstanceXAmzTargetEnum {
    OpsWorks20130218StartInstance = "OpsWorks_20130218.StartInstance"
}
export declare class StartInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StartInstanceXAmzTargetEnum;
}
export declare class StartInstanceRequest extends SpeakeasyBase {
    headers: StartInstanceHeaders;
    request: shared.StartInstanceRequest;
}
export declare class StartInstanceResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
