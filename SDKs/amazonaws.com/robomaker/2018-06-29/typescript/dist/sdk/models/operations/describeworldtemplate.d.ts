import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeWorldTemplateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeWorldTemplateRequestBody extends SpeakeasyBase {
    template: string;
}
export declare class DescribeWorldTemplateRequest extends SpeakeasyBase {
    headers: DescribeWorldTemplateHeaders;
    request: DescribeWorldTemplateRequestBody;
}
export declare class DescribeWorldTemplateResponse extends SpeakeasyBase {
    contentType: string;
    describeWorldTemplateResponse?: shared.DescribeWorldTemplateResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
