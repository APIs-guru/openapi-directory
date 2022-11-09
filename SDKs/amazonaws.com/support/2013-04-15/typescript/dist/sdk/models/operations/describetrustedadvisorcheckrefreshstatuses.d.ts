import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnum {
    AwsSupport20130415DescribeTrustedAdvisorCheckRefreshStatuses = "AWSSupport_20130415.DescribeTrustedAdvisorCheckRefreshStatuses"
}
export declare class DescribeTrustedAdvisorCheckRefreshStatusesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeTrustedAdvisorCheckRefreshStatusesXAmzTargetEnum;
}
export declare class DescribeTrustedAdvisorCheckRefreshStatusesRequest extends SpeakeasyBase {
    headers: DescribeTrustedAdvisorCheckRefreshStatusesHeaders;
    request: shared.DescribeTrustedAdvisorCheckRefreshStatusesRequest;
}
export declare class DescribeTrustedAdvisorCheckRefreshStatusesResponse extends SpeakeasyBase {
    contentType: string;
    describeTrustedAdvisorCheckRefreshStatusesResponse?: shared.DescribeTrustedAdvisorCheckRefreshStatusesResponse;
    internalServerError?: any;
    statusCode: number;
}
