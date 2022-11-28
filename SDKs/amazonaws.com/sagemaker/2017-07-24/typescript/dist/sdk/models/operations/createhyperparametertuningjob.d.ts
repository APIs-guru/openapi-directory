import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateHyperParameterTuningJobXAmzTargetEnum {
    SageMakerCreateHyperParameterTuningJob = "SageMaker.CreateHyperParameterTuningJob"
}
export declare class CreateHyperParameterTuningJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHyperParameterTuningJobXAmzTargetEnum;
}
export declare class CreateHyperParameterTuningJobRequest extends SpeakeasyBase {
    headers: CreateHyperParameterTuningJobHeaders;
    request: shared.CreateHyperParameterTuningJobRequest;
}
export declare class CreateHyperParameterTuningJobResponse extends SpeakeasyBase {
    contentType: string;
    createHyperParameterTuningJobResponse?: shared.CreateHyperParameterTuningJobResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
