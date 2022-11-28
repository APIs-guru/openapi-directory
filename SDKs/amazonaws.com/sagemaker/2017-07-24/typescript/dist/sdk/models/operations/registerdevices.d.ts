import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterDevicesXAmzTargetEnum {
    SageMakerRegisterDevices = "SageMaker.RegisterDevices"
}
export declare class RegisterDevicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterDevicesXAmzTargetEnum;
}
export declare class RegisterDevicesRequest extends SpeakeasyBase {
    headers: RegisterDevicesHeaders;
    request: shared.RegisterDevicesRequest;
}
export declare class RegisterDevicesResponse extends SpeakeasyBase {
    contentType: string;
    resourceLimitExceeded?: any;
    statusCode: number;
}
