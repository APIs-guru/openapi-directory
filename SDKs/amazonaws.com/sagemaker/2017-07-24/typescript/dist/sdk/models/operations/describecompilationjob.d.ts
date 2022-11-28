import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeCompilationJobXAmzTargetEnum {
    SageMakerDescribeCompilationJob = "SageMaker.DescribeCompilationJob"
}
export declare class DescribeCompilationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeCompilationJobXAmzTargetEnum;
}
export declare class DescribeCompilationJobRequest extends SpeakeasyBase {
    headers: DescribeCompilationJobHeaders;
    request: shared.DescribeCompilationJobRequest;
}
export declare class DescribeCompilationJobResponse extends SpeakeasyBase {
    contentType: string;
    describeCompilationJobResponse?: shared.DescribeCompilationJobResponse;
    resourceNotFound?: any;
    statusCode: number;
}
