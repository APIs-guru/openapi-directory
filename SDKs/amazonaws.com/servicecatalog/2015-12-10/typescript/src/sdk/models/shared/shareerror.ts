import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ShareError
/** 
 * Errors that occurred during the portfolio share operation.
**/
export class ShareError extends SpeakeasyBase {
  @Metadata({ data: "json, name=Accounts" })
  accounts?: string[];

  @Metadata({ data: "json, name=Error" })
  error?: string;

  @Metadata({ data: "json, name=Message" })
  message?: string;
}
