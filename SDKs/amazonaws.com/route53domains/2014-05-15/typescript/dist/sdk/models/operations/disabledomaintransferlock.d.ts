import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DisableDomainTransferLockXAmzTargetEnum {
    Route53DomainsV20140515DisableDomainTransferLock = "Route53Domains_v20140515.DisableDomainTransferLock"
}
export declare class DisableDomainTransferLockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisableDomainTransferLockXAmzTargetEnum;
}
export declare class DisableDomainTransferLockRequest extends SpeakeasyBase {
    headers: DisableDomainTransferLockHeaders;
    request: shared.DisableDomainTransferLockRequest;
}
export declare class DisableDomainTransferLockResponse extends SpeakeasyBase {
    contentType: string;
    disableDomainTransferLockResponse?: shared.DisableDomainTransferLockResponse;
    duplicateRequest?: any;
    invalidInput?: any;
    operationLimitExceeded?: any;
    statusCode: number;
    tldRulesViolation?: any;
    unsupportedTld?: any;
}
