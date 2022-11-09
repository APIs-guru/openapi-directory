import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StartSessionRequest
/** 
 * Specifies a request to start a new session.
**/
export class StartSessionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LedgerName" })
  ledgerName: string;
}
