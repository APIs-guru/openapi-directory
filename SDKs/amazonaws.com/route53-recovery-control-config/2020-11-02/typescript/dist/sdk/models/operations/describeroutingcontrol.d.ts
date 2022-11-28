import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeRoutingControlPathParams extends SpeakeasyBase {
    routingControlArn: string;
}
export declare class DescribeRoutingControlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeRoutingControlRequest extends SpeakeasyBase {
    pathParams: DescribeRoutingControlPathParams;
    headers: DescribeRoutingControlHeaders;
}
export declare class DescribeRoutingControlResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    describeRoutingControlResponse?: shared.DescribeRoutingControlResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
