import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeConnectorPathParams extends SpeakeasyBase {
    connectorArn: string;
}
export declare class DescribeConnectorHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeConnectorRequest extends SpeakeasyBase {
    pathParams: DescribeConnectorPathParams;
    headers: DescribeConnectorHeaders;
}
export declare class DescribeConnectorResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    describeConnectorResponse?: shared.DescribeConnectorResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    notFoundException?: any;
    serviceUnavailableException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    unauthorizedException?: any;
}
