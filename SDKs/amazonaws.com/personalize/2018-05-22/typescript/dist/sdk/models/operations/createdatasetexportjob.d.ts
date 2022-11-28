import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateDatasetExportJobXAmzTargetEnum {
    AmazonPersonalizeCreateDatasetExportJob = "AmazonPersonalize.CreateDatasetExportJob"
}
export declare class CreateDatasetExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDatasetExportJobXAmzTargetEnum;
}
export declare class CreateDatasetExportJobRequest extends SpeakeasyBase {
    headers: CreateDatasetExportJobHeaders;
    request: shared.CreateDatasetExportJobRequest;
}
export declare class CreateDatasetExportJobResponse extends SpeakeasyBase {
    contentType: string;
    createDatasetExportJobResponse?: shared.CreateDatasetExportJobResponse;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
