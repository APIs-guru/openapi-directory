import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeWorldExportJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeWorldExportJobRequestBody extends SpeakeasyBase {
    job: string;
}
export declare class DescribeWorldExportJobRequest extends SpeakeasyBase {
    headers: DescribeWorldExportJobHeaders;
    request: DescribeWorldExportJobRequestBody;
}
export declare class DescribeWorldExportJobResponse extends SpeakeasyBase {
    contentType: string;
    describeWorldExportJobResponse?: shared.DescribeWorldExportJobResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
