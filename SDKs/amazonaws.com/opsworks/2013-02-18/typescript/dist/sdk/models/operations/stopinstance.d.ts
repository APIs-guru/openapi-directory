import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopInstanceXAmzTargetEnum {
    OpsWorks20130218StopInstance = "OpsWorks_20130218.StopInstance"
}
export declare class StopInstanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopInstanceXAmzTargetEnum;
}
export declare class StopInstanceRequest extends SpeakeasyBase {
    headers: StopInstanceHeaders;
    request: shared.StopInstanceRequest;
}
export declare class StopInstanceResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
