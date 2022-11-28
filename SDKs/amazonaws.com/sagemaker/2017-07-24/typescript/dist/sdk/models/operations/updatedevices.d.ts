import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDevicesXAmzTargetEnum {
    SageMakerUpdateDevices = "SageMaker.UpdateDevices"
}
export declare class UpdateDevicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDevicesXAmzTargetEnum;
}
export declare class UpdateDevicesRequest extends SpeakeasyBase {
    headers: UpdateDevicesHeaders;
    request: shared.UpdateDevicesRequest;
}
export declare class UpdateDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
