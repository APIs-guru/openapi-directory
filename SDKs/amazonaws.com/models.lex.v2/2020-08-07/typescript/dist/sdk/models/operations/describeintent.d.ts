import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DescribeIntentPathParams extends SpeakeasyBase {
    botId: string;
    botVersion: string;
    intentId: string;
    localeId: string;
}
export declare class DescribeIntentHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DescribeIntentRequest extends SpeakeasyBase {
    pathParams: DescribeIntentPathParams;
    headers: DescribeIntentHeaders;
}
export declare class DescribeIntentResponse extends SpeakeasyBase {
    contentType: string;
    describeIntentResponse?: shared.DescribeIntentResponse;
    internalServerException?: any;
    resourceNotFoundException?: any;
    serviceQuotaExceededException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
