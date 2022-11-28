import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ResendContactReachabilityEmailXAmzTargetEnum {
    Route53DomainsV20140515ResendContactReachabilityEmail = "Route53Domains_v20140515.ResendContactReachabilityEmail"
}
export declare class ResendContactReachabilityEmailHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResendContactReachabilityEmailXAmzTargetEnum;
}
export declare class ResendContactReachabilityEmailRequest extends SpeakeasyBase {
    headers: ResendContactReachabilityEmailHeaders;
    request: shared.ResendContactReachabilityEmailRequest;
}
export declare class ResendContactReachabilityEmailResponse extends SpeakeasyBase {
    contentType: string;
    invalidInput?: any;
    operationLimitExceeded?: any;
    resendContactReachabilityEmailResponse?: shared.ResendContactReachabilityEmailResponse;
    statusCode: number;
    unsupportedTld?: any;
}
