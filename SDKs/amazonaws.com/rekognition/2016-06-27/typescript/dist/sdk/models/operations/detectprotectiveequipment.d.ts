import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DetectProtectiveEquipmentXAmzTargetEnum {
    RekognitionServiceDetectProtectiveEquipment = "RekognitionService.DetectProtectiveEquipment"
}
export declare class DetectProtectiveEquipmentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DetectProtectiveEquipmentXAmzTargetEnum;
}
export declare class DetectProtectiveEquipmentRequest extends SpeakeasyBase {
    headers: DetectProtectiveEquipmentHeaders;
    request: shared.DetectProtectiveEquipmentRequest;
}
export declare class DetectProtectiveEquipmentResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    detectProtectiveEquipmentResponse?: shared.DetectProtectiveEquipmentResponse;
    imageTooLargeException?: any;
    internalServerError?: any;
    invalidImageFormatException?: any;
    invalidParameterException?: any;
    invalidS3ObjectException?: any;
    provisionedThroughputExceededException?: any;
    statusCode: number;
    throttlingException?: any;
}
