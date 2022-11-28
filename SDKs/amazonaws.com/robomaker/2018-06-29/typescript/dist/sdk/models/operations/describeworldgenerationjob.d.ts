import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeWorldGenerationJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeWorldGenerationJobRequestBody extends SpeakeasyBase {
    job: string;
}
export declare class DescribeWorldGenerationJobRequest extends SpeakeasyBase {
    headers: DescribeWorldGenerationJobHeaders;
    request: DescribeWorldGenerationJobRequestBody;
}
export declare class DescribeWorldGenerationJobResponse extends SpeakeasyBase {
    contentType: string;
    describeWorldGenerationJobResponse?: shared.DescribeWorldGenerationJobResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
