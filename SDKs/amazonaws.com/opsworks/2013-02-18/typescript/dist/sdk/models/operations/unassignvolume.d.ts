import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UnassignVolumeXAmzTargetEnum {
    OpsWorks20130218UnassignVolume = "OpsWorks_20130218.UnassignVolume"
}
export declare class UnassignVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UnassignVolumeXAmzTargetEnum;
}
export declare class UnassignVolumeRequest extends SpeakeasyBase {
    headers: UnassignVolumeHeaders;
    request: shared.UnassignVolumeRequest;
}
export declare class UnassignVolumeResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
