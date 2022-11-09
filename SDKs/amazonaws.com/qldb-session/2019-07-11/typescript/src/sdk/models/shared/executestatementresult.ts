import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { IoUsage } from "./iousage";
import { Page } from "./page";
import { TimingInformation } from "./timinginformation";


// ExecuteStatementResult
/** 
 * Contains the details of the executed statement.
**/
export class ExecuteStatementResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ConsumedIOs" })
  consumedIOs?: IoUsage;

  @Metadata({ data: "json, name=FirstPage" })
  firstPage?: Page;

  @Metadata({ data: "json, name=TimingInformation" })
  timingInformation?: TimingInformation;
}
