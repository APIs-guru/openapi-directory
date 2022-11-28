import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDeviceFleetXAmzTargetEnum {
    SageMakerCreateDeviceFleet = "SageMaker.CreateDeviceFleet"
}
export declare class CreateDeviceFleetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDeviceFleetXAmzTargetEnum;
}
export declare class CreateDeviceFleetRequest extends SpeakeasyBase {
    headers: CreateDeviceFleetHeaders;
    request: shared.CreateDeviceFleetRequest;
}
export declare class CreateDeviceFleetResponse extends SpeakeasyBase {
    contentType: string;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
