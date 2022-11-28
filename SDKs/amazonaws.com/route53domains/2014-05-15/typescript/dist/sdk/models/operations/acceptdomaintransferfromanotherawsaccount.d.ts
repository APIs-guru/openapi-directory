import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum {
    Route53DomainsV20140515AcceptDomainTransferFromAnotherAwsAccount = "Route53Domains_v20140515.AcceptDomainTransferFromAnotherAwsAccount"
}
export declare class AcceptDomainTransferFromAnotherAwsAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AcceptDomainTransferFromAnotherAwsAccountXAmzTargetEnum;
}
export declare class AcceptDomainTransferFromAnotherAwsAccountRequest extends SpeakeasyBase {
    headers: AcceptDomainTransferFromAnotherAwsAccountHeaders;
    request: shared.AcceptDomainTransferFromAnotherAwsAccountRequest;
}
export declare class AcceptDomainTransferFromAnotherAwsAccountResponse extends SpeakeasyBase {
    acceptDomainTransferFromAnotherAwsAccountResponse?: shared.AcceptDomainTransferFromAnotherAwsAccountResponse;
    contentType: string;
    domainLimitExceeded?: any;
    invalidInput?: any;
    operationLimitExceeded?: any;
    statusCode: number;
}
