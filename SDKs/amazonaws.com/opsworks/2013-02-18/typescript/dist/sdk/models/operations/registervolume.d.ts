import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterVolumeXAmzTargetEnum {
    OpsWorks20130218RegisterVolume = "OpsWorks_20130218.RegisterVolume"
}
export declare class RegisterVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterVolumeXAmzTargetEnum;
}
export declare class RegisterVolumeRequest extends SpeakeasyBase {
    headers: RegisterVolumeHeaders;
    request: shared.RegisterVolumeRequest;
}
export declare class RegisterVolumeResponse extends SpeakeasyBase {
    contentType: string;
    registerVolumeResult?: shared.RegisterVolumeResult;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
