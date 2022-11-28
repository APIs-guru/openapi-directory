import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SetTimeBasedAutoScalingXAmzTargetEnum {
    OpsWorks20130218SetTimeBasedAutoScaling = "OpsWorks_20130218.SetTimeBasedAutoScaling"
}
export declare class SetTimeBasedAutoScalingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetTimeBasedAutoScalingXAmzTargetEnum;
}
export declare class SetTimeBasedAutoScalingRequest extends SpeakeasyBase {
    headers: SetTimeBasedAutoScalingHeaders;
    request: shared.SetTimeBasedAutoScalingRequest;
}
export declare class SetTimeBasedAutoScalingResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
