import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum {
    Route53DomainsV20140515RejectDomainTransferFromAnotherAwsAccount = "Route53Domains_v20140515.RejectDomainTransferFromAnotherAwsAccount"
}
export declare class RejectDomainTransferFromAnotherAwsAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RejectDomainTransferFromAnotherAwsAccountXAmzTargetEnum;
}
export declare class RejectDomainTransferFromAnotherAwsAccountRequest extends SpeakeasyBase {
    headers: RejectDomainTransferFromAnotherAwsAccountHeaders;
    request: shared.RejectDomainTransferFromAnotherAwsAccountRequest;
}
export declare class RejectDomainTransferFromAnotherAwsAccountResponse extends SpeakeasyBase {
    contentType: string;
    invalidInput?: any;
    operationLimitExceeded?: any;
    rejectDomainTransferFromAnotherAwsAccountResponse?: shared.RejectDomainTransferFromAnotherAwsAccountResponse;
    statusCode: number;
}
