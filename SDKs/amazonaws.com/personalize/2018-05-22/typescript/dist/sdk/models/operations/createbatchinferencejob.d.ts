import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateBatchInferenceJobXAmzTargetEnum {
    AmazonPersonalizeCreateBatchInferenceJob = "AmazonPersonalize.CreateBatchInferenceJob"
}
export declare class CreateBatchInferenceJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateBatchInferenceJobXAmzTargetEnum;
}
export declare class CreateBatchInferenceJobRequest extends SpeakeasyBase {
    headers: CreateBatchInferenceJobHeaders;
    request: shared.CreateBatchInferenceJobRequest;
}
export declare class CreateBatchInferenceJobResponse extends SpeakeasyBase {
    contentType: string;
    createBatchInferenceJobResponse?: shared.CreateBatchInferenceJobResponse;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceAlreadyExistsException?: any;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
