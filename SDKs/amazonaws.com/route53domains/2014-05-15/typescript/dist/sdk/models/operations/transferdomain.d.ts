import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TransferDomainXAmzTargetEnum {
    Route53DomainsV20140515TransferDomain = "Route53Domains_v20140515.TransferDomain"
}
export declare class TransferDomainHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TransferDomainXAmzTargetEnum;
}
export declare class TransferDomainRequest extends SpeakeasyBase {
    headers: TransferDomainHeaders;
    request: shared.TransferDomainRequest;
}
export declare class TransferDomainResponse extends SpeakeasyBase {
    contentType: string;
    domainLimitExceeded?: any;
    duplicateRequest?: any;
    invalidInput?: any;
    operationLimitExceeded?: any;
    statusCode: number;
    tldRulesViolation?: any;
    transferDomainResponse?: shared.TransferDomainResponse;
    unsupportedTld?: any;
}
