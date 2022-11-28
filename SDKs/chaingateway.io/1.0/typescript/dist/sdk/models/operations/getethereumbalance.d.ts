import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEthereumBalanceHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class GetEthereumBalanceRequest extends SpeakeasyBase {
    headers: GetEthereumBalanceHeaders;
    request: shared.GetEthereumBalanceRequest;
}
export declare class GetEthereumBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getEthereumBalance?: shared.GetEthereumBalance;
}
