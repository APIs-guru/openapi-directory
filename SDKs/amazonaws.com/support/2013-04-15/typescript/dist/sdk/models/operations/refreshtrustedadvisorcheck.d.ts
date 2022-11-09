import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RefreshTrustedAdvisorCheckXAmzTargetEnum {
    AwsSupport20130415RefreshTrustedAdvisorCheck = "AWSSupport_20130415.RefreshTrustedAdvisorCheck"
}
export declare class RefreshTrustedAdvisorCheckHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RefreshTrustedAdvisorCheckXAmzTargetEnum;
}
export declare class RefreshTrustedAdvisorCheckRequest extends SpeakeasyBase {
    headers: RefreshTrustedAdvisorCheckHeaders;
    request: shared.RefreshTrustedAdvisorCheckRequest;
}
export declare class RefreshTrustedAdvisorCheckResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    refreshTrustedAdvisorCheckResponse?: shared.RefreshTrustedAdvisorCheckResponse;
    statusCode: number;
}
