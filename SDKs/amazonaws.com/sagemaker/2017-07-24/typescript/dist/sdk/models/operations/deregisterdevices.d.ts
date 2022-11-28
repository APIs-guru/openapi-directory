import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterDevicesXAmzTargetEnum {
    SageMakerDeregisterDevices = "SageMaker.DeregisterDevices"
}
export declare class DeregisterDevicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterDevicesXAmzTargetEnum;
}
export declare class DeregisterDevicesRequest extends SpeakeasyBase {
    headers: DeregisterDevicesHeaders;
    request: shared.DeregisterDevicesRequest;
}
export declare class DeregisterDevicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
