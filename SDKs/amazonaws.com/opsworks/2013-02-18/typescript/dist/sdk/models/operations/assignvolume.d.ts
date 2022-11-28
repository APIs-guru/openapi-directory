import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AssignVolumeXAmzTargetEnum {
    OpsWorks20130218AssignVolume = "OpsWorks_20130218.AssignVolume"
}
export declare class AssignVolumeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssignVolumeXAmzTargetEnum;
}
export declare class AssignVolumeRequest extends SpeakeasyBase {
    headers: AssignVolumeHeaders;
    request: shared.AssignVolumeRequest;
}
export declare class AssignVolumeResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    validationException?: any;
}
