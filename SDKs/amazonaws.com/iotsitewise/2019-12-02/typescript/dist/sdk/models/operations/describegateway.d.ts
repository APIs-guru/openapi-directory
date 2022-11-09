import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeGatewayPathParams extends SpeakeasyBase {
    gatewayId: string;
}
export declare class DescribeGatewayHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeGatewayRequest extends SpeakeasyBase {
    pathParams: DescribeGatewayPathParams;
    headers: DescribeGatewayHeaders;
}
export declare class DescribeGatewayResponse extends SpeakeasyBase {
    contentType: string;
    describeGatewayResponse?: shared.DescribeGatewayResponse;
    internalFailureException?: any;
    invalidRequestException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
}
