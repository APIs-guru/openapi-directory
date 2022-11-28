import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StartSessionRequest
/** 
 * Specifies a request to start a new session.
**/
export class StartSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LedgerName" })
  ledgerName: string;
}
