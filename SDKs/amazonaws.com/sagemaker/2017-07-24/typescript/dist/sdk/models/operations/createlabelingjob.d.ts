import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateLabelingJobXAmzTargetEnum {
    SageMakerCreateLabelingJob = "SageMaker.CreateLabelingJob"
}
export declare class CreateLabelingJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateLabelingJobXAmzTargetEnum;
}
export declare class CreateLabelingJobRequest extends SpeakeasyBase {
    headers: CreateLabelingJobHeaders;
    request: shared.CreateLabelingJobRequest;
}
export declare class CreateLabelingJobResponse extends SpeakeasyBase {
    contentType: string;
    createLabelingJobResponse?: shared.CreateLabelingJobResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
