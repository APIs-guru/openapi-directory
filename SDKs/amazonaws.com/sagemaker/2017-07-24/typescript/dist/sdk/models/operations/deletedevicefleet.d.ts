import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteDeviceFleetXAmzTargetEnum {
    SageMakerDeleteDeviceFleet = "SageMaker.DeleteDeviceFleet"
}
export declare class DeleteDeviceFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDeviceFleetXAmzTargetEnum;
}
export declare class DeleteDeviceFleetRequest extends SpeakeasyBase {
    headers: DeleteDeviceFleetHeaders;
    request: shared.DeleteDeviceFleetRequest;
}
export declare class DeleteDeviceFleetResponse extends SpeakeasyBase {
    contentType: string;
    resourceInUse?: any;
    statusCode: number;
}
