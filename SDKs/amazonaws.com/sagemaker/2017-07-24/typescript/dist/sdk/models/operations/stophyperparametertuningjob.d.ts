import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum StopHyperParameterTuningJobXAmzTargetEnum {
    SageMakerStopHyperParameterTuningJob = "SageMaker.StopHyperParameterTuningJob"
}
export declare class StopHyperParameterTuningJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: StopHyperParameterTuningJobXAmzTargetEnum;
}
export declare class StopHyperParameterTuningJobRequest extends SpeakeasyBase {
    headers: StopHyperParameterTuningJobHeaders;
    request: shared.StopHyperParameterTuningJobRequest;
}
export declare class StopHyperParameterTuningJobResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFound?: any;
    statusCode: number;
}
