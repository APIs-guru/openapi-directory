import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteDatasetXAmzTargetEnum {
    AwsLookoutEquipmentFrontendServiceDeleteDataset = "AWSLookoutEquipmentFrontendService.DeleteDataset"
}
export declare class DeleteDatasetHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDatasetXAmzTargetEnum;
}
export declare class DeleteDatasetRequest extends SpeakeasyBase {
    headers: DeleteDatasetHeaders;
    request: shared.DeleteDatasetRequest;
}
export declare class DeleteDatasetResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
