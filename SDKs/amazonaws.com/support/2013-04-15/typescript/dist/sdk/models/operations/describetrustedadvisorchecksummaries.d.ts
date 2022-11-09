import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeTrustedAdvisorCheckSummariesXAmzTargetEnum {
    AwsSupport20130415DescribeTrustedAdvisorCheckSummaries = "AWSSupport_20130415.DescribeTrustedAdvisorCheckSummaries"
}
export declare class DescribeTrustedAdvisorCheckSummariesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrustedAdvisorCheckSummariesXAmzTargetEnum;
}
export declare class DescribeTrustedAdvisorCheckSummariesRequest extends SpeakeasyBase {
    headers: DescribeTrustedAdvisorCheckSummariesHeaders;
    request: shared.DescribeTrustedAdvisorCheckSummariesRequest;
}
export declare class DescribeTrustedAdvisorCheckSummariesResponse extends SpeakeasyBase {
    contentType: string;
    describeTrustedAdvisorCheckSummariesResponse?: shared.DescribeTrustedAdvisorCheckSummariesResponse;
    internalServerError?: any;
    statusCode: number;
}
