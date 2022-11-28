import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateDeviceFleetXAmzTargetEnum {
    SageMakerUpdateDeviceFleet = "SageMaker.UpdateDeviceFleet"
}
export declare class UpdateDeviceFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDeviceFleetXAmzTargetEnum;
}
export declare class UpdateDeviceFleetRequest extends SpeakeasyBase {
    headers: UpdateDeviceFleetHeaders;
    request: shared.UpdateDeviceFleetRequest;
}
export declare class UpdateDeviceFleetResponse extends SpeakeasyBase {
    contentType: string;
    resourceInUse?: any;
    statusCode: number;
}
