import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeClassificationJobPathParams extends SpeakeasyBase {
    jobId: string;
}
export declare class DescribeClassificationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeClassificationJobRequest extends SpeakeasyBase {
    pathParams: DescribeClassificationJobPathParams;
    headers: DescribeClassificationJobHeaders;
}
export declare class DescribeClassificationJobResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    describeClassificationJobResponse?: shared.DescribeClassificationJobResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
