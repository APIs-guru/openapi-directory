import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetContactReachabilityStatusXAmzTargetEnum {
    Route53DomainsV20140515GetContactReachabilityStatus = "Route53Domains_v20140515.GetContactReachabilityStatus"
}
export declare class GetContactReachabilityStatusHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetContactReachabilityStatusXAmzTargetEnum;
}
export declare class GetContactReachabilityStatusRequest extends SpeakeasyBase {
    headers: GetContactReachabilityStatusHeaders;
    request: shared.GetContactReachabilityStatusRequest;
}
export declare class GetContactReachabilityStatusResponse extends SpeakeasyBase {
    contentType: string;
    getContactReachabilityStatusResponse?: shared.GetContactReachabilityStatusResponse;
    invalidInput?: any;
    operationLimitExceeded?: any;
    statusCode: number;
    unsupportedTld?: any;
}
