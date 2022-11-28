import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeWorldHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeWorldRequestBody extends SpeakeasyBase {
    world: string;
}
export declare class DescribeWorldRequest extends SpeakeasyBase {
    headers: DescribeWorldHeaders;
    request: DescribeWorldRequestBody;
}
export declare class DescribeWorldResponse extends SpeakeasyBase {
    contentType: string;
    describeWorldResponse?: shared.DescribeWorldResponse;
    internalServerException?: any;
    invalidParameterException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
