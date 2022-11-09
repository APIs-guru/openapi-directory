import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeControlPanelPathParams extends SpeakeasyBase {
    controlPanelArn: string;
}
export declare class DescribeControlPanelHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeControlPanelRequest extends SpeakeasyBase {
    pathParams: DescribeControlPanelPathParams;
    headers: DescribeControlPanelHeaders;
}
export declare class DescribeControlPanelResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    conflictException?: any;
    contentType: string;
    describeControlPanelResponse?: shared.DescribeControlPanelResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
