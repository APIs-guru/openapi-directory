import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeMapPathParams extends SpeakeasyBase {
    mapName: string;
}
export declare class DescribeMapHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeMapRequest extends SpeakeasyBase {
    pathParams: DescribeMapPathParams;
    headers: DescribeMapHeaders;
}
export declare class DescribeMapResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeMapResponse?: shared.DescribeMapResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
