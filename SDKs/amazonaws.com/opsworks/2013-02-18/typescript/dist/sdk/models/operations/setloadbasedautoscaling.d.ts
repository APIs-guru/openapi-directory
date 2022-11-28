import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SetLoadBasedAutoScalingXAmzTargetEnum {
    OpsWorks20130218SetLoadBasedAutoScaling = "OpsWorks_20130218.SetLoadBasedAutoScaling"
}
export declare class SetLoadBasedAutoScalingHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetLoadBasedAutoScalingXAmzTargetEnum;
}
export declare class SetLoadBasedAutoScalingRequest extends SpeakeasyBase {
    headers: SetLoadBasedAutoScalingHeaders;
    request: shared.SetLoadBasedAutoScalingRequest;
}
export declare class SetLoadBasedAutoScalingResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
