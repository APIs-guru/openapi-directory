import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TransferDomainToAnotherAwsAccountXAmzTargetEnum {
    Route53DomainsV20140515TransferDomainToAnotherAwsAccount = "Route53Domains_v20140515.TransferDomainToAnotherAwsAccount"
}
export declare class TransferDomainToAnotherAwsAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TransferDomainToAnotherAwsAccountXAmzTargetEnum;
}
export declare class TransferDomainToAnotherAwsAccountRequest extends SpeakeasyBase {
    headers: TransferDomainToAnotherAwsAccountHeaders;
    request: shared.TransferDomainToAnotherAwsAccountRequest;
}
export declare class TransferDomainToAnotherAwsAccountResponse extends SpeakeasyBase {
    contentType: string;
    duplicateRequest?: any;
    invalidInput?: any;
    operationLimitExceeded?: any;
    statusCode: number;
    transferDomainToAnotherAwsAccountResponse?: shared.TransferDomainToAnotherAwsAccountResponse;
}
