import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTrustedAdvisorCheckResultXAmzTargetEnum {
    AwsSupport20130415DescribeTrustedAdvisorCheckResult = "AWSSupport_20130415.DescribeTrustedAdvisorCheckResult"
}
export declare class DescribeTrustedAdvisorCheckResultHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrustedAdvisorCheckResultXAmzTargetEnum;
}
export declare class DescribeTrustedAdvisorCheckResultRequest extends SpeakeasyBase {
    headers: DescribeTrustedAdvisorCheckResultHeaders;
    request: shared.DescribeTrustedAdvisorCheckResultRequest;
}
export declare class DescribeTrustedAdvisorCheckResultResponse extends SpeakeasyBase {
    contentType: string;
    describeTrustedAdvisorCheckResultResponse?: shared.DescribeTrustedAdvisorCheckResultResponse;
    internalServerError?: any;
    statusCode: number;
}
