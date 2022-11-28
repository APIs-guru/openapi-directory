import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum {
    Route53DomainsV20140515CancelDomainTransferToAnotherAwsAccount = "Route53Domains_v20140515.CancelDomainTransferToAnotherAwsAccount"
}
export declare class CancelDomainTransferToAnotherAwsAccountHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CancelDomainTransferToAnotherAwsAccountXAmzTargetEnum;
}
export declare class CancelDomainTransferToAnotherAwsAccountRequest extends SpeakeasyBase {
    headers: CancelDomainTransferToAnotherAwsAccountHeaders;
    request: shared.CancelDomainTransferToAnotherAwsAccountRequest;
}
export declare class CancelDomainTransferToAnotherAwsAccountResponse extends SpeakeasyBase {
    cancelDomainTransferToAnotherAwsAccountResponse?: shared.CancelDomainTransferToAnotherAwsAccountResponse;
    contentType: string;
    invalidInput?: any;
    operationLimitExceeded?: any;
    statusCode: number;
}
