import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum CreateDatasetXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceCreateDataset = "AWSLookoutEquipmentFrontendService.CreateDataset"
}
export declare class CreateDatasetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDatasetXAmzTargetEnum;
}
export declare class CreateDatasetRequest extends SpeakeasyBase {
    headers: CreateDatasetHeaders;
    request: shared.CreateDatasetRequest;
}
export declare class CreateDatasetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    createDatasetResponse?: shared.CreateDatasetResponse;
    internalServerException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
