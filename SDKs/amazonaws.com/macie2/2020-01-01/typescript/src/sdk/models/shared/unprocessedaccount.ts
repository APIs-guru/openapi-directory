import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ErrorCodeEnum } from "./errorcodeenum";


// UnprocessedAccount
/** 
 *  <p>Provides information about an account-related request that hasn't been processed.</p>
**/
export class UnprocessedAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: ErrorCodeEnum;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;
}
