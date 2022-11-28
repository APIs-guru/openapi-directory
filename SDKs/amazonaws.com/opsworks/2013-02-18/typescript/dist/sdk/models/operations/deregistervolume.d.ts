import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterVolumeXAmzTargetEnum {
    OpsWorks20130218DeregisterVolume = "OpsWorks_20130218.DeregisterVolume"
}
export declare class DeregisterVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterVolumeXAmzTargetEnum;
}
export declare class DeregisterVolumeRequest extends SpeakeasyBase {
    headers: DeregisterVolumeHeaders;
    request: shared.DeregisterVolumeRequest;
}
export declare class DeregisterVolumeResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
