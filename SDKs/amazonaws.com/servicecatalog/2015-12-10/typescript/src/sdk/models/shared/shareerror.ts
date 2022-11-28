import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ShareError
/** 
 * Errors that occurred during the portfolio share operation.
**/
export class ShareError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Accounts" })
  accounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: string;
}
