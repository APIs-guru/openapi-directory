import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum EnableDomainTransferLockXAmzTargetEnum {
    Route53DomainsV20140515EnableDomainTransferLock = "Route53Domains_v20140515.EnableDomainTransferLock"
}
export declare class EnableDomainTransferLockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: EnableDomainTransferLockXAmzTargetEnum;
}
export declare class EnableDomainTransferLockRequest extends SpeakeasyBase {
    headers: EnableDomainTransferLockHeaders;
    request: shared.EnableDomainTransferLockRequest;
}
export declare class EnableDomainTransferLockResponse extends SpeakeasyBase {
    contentType: string;
    duplicateRequest?: any;
    enableDomainTransferLockResponse?: shared.EnableDomainTransferLockResponse;
    invalidInput?: any;
    operationLimitExceeded?: any;
    statusCode: number;
    tldRulesViolation?: any;
    unsupportedTld?: any;
}
