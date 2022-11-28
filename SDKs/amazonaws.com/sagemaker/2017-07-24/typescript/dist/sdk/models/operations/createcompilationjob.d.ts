import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateCompilationJobXAmzTargetEnum {
    SageMakerCreateCompilationJob = "SageMaker.CreateCompilationJob"
}
export declare class CreateCompilationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateCompilationJobXAmzTargetEnum;
}
export declare class CreateCompilationJobRequest extends SpeakeasyBase {
    headers: CreateCompilationJobHeaders;
    request: shared.CreateCompilationJobRequest;
}
export declare class CreateCompilationJobResponse extends SpeakeasyBase {
    contentType: string;
    createCompilationJobResponse?: shared.CreateCompilationJobResponse;
    resourceInUse?: any;
    resourceLimitExceeded?: any;
    statusCode: number;
}
