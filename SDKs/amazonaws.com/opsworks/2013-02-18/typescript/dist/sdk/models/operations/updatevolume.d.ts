import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateVolumeXAmzTargetEnum {
    OpsWorks20130218UpdateVolume = "OpsWorks_20130218.UpdateVolume"
}
export declare class UpdateVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateVolumeXAmzTargetEnum;
}
export declare class UpdateVolumeRequest extends SpeakeasyBase {
    headers: UpdateVolumeHeaders;
    request: shared.UpdateVolumeRequest;
}
export declare class UpdateVolumeResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
