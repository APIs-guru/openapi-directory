import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DescribeAlertHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeAlertRequestBody extends SpeakeasyBase {
    alertArn: string;
}
export declare class DescribeAlertRequest extends SpeakeasyBase {
    headers: DescribeAlertHeaders;
    request: DescribeAlertRequestBody;
}
export declare class DescribeAlertResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    describeAlertResponse?: shared.DescribeAlertResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
    validationException?: any;
}
