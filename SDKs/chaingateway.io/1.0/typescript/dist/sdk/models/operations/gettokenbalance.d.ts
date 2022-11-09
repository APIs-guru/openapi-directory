import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetTokenBalanceHeaders extends SpeakeasyBase {
    authorization: string;
}
export declare class GetTokenBalanceRequest extends SpeakeasyBase {
    headers: GetTokenBalanceHeaders;
    request: shared.GetTokenBalanceRequest;
}
export declare class GetTokenBalanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getTokenBalance?: shared.GetTokenBalance;
}
