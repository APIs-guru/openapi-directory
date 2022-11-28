import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetAccountBalanceXAmzTargetEnum {
    MTurkRequesterServiceV20170117GetAccountBalance = "MTurkRequesterServiceV20170117.GetAccountBalance"
}
export declare class GetAccountBalanceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAccountBalanceXAmzTargetEnum;
}
export declare class GetAccountBalanceRequest extends SpeakeasyBase {
    headers: GetAccountBalanceHeaders;
    request: Map<string, any>;
}
export declare class GetAccountBalanceResponse extends SpeakeasyBase {
    contentType: string;
    getAccountBalanceResponse?: shared.GetAccountBalanceResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
