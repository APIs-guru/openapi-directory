import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DescribeTrustedAdvisorChecksXAmzTargetEnum {
    AwsSupport20130415DescribeTrustedAdvisorChecks = "AWSSupport_20130415.DescribeTrustedAdvisorChecks"
}
export declare class DescribeTrustedAdvisorChecksHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrustedAdvisorChecksXAmzTargetEnum;
}
export declare class DescribeTrustedAdvisorChecksRequest extends SpeakeasyBase {
    headers: DescribeTrustedAdvisorChecksHeaders;
    request: shared.DescribeTrustedAdvisorChecksRequest;
}
export declare class DescribeTrustedAdvisorChecksResponse extends SpeakeasyBase {
    contentType: string;
    describeTrustedAdvisorChecksResponse?: shared.DescribeTrustedAdvisorChecksResponse;
    internalServerError?: any;
    statusCode: number;
}
