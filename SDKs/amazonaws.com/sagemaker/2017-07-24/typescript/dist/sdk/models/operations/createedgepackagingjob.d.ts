import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateEdgePackagingJobXAmzTargetEnum {
    SageMakerCreateEdgePackagingJob = "SageMaker.CreateEdgePackagingJob"
}
export declare class CreateEdgePackagingJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateEdgePackagingJobXAmzTargetEnum;
}
export declare class CreateEdgePackagingJobRequest extends SpeakeasyBase {
    headers: CreateEdgePackagingJobHeaders;
    request: shared.CreateEdgePackagingJobRequest;
}
export declare class CreateEdgePackagingJobResponse extends SpeakeasyBase {
    contentType: string;
    resourceLimitExceeded?: any;
    statusCode: number;
}
