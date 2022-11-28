import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CheckDomainTransferabilityXAmzTargetEnum {
    Route53DomainsV20140515CheckDomainTransferability = "Route53Domains_v20140515.CheckDomainTransferability"
}
export declare class CheckDomainTransferabilityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CheckDomainTransferabilityXAmzTargetEnum;
}
export declare class CheckDomainTransferabilityRequest extends SpeakeasyBase {
    headers: CheckDomainTransferabilityHeaders;
    request: shared.CheckDomainTransferabilityRequest;
}
export declare class CheckDomainTransferabilityResponse extends SpeakeasyBase {
    checkDomainTransferabilityResponse?: shared.CheckDomainTransferabilityResponse;
    contentType: string;
    invalidInput?: any;
    statusCode: number;
    unsupportedTld?: any;
}
