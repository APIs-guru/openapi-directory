import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorCodeEnum } from "./errorcodeenum";
/**
 *  <p>Provides information about an account-related request that hasn't been processed.</p>
**/
export declare class UnprocessedAccount extends SpeakeasyBase {
    accountId?: string;
    errorCode?: ErrorCodeEnum;
    errorMessage?: string;
}
