import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopCompilationJobXAmzTargetEnum {
    SageMakerStopCompilationJob = "SageMaker.StopCompilationJob"
}
export declare class StopCompilationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopCompilationJobXAmzTargetEnum;
}
export declare class StopCompilationJobRequest extends SpeakeasyBase {
    headers: StopCompilationJobHeaders;
    request: shared.StopCompilationJobRequest;
}
export declare class StopCompilationJobResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
