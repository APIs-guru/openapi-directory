import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeCustomPluginPathParams extends SpeakeasyBase {
    customPluginArn: string;
}
export declare class DescribeCustomPluginHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeCustomPluginRequest extends SpeakeasyBase {
    pathParams: DescribeCustomPluginPathParams;
    headers: DescribeCustomPluginHeaders;
}
export declare class DescribeCustomPluginResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    describeCustomPluginResponse?: shared.DescribeCustomPluginResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
