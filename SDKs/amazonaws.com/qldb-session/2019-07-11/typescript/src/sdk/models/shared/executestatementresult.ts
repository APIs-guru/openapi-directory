import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IoUsage } from "./iousage";
import { Page } from "./page";
import { TimingInformation } from "./timinginformation";



// ExecuteStatementResult
/** 
 * Contains the details of the executed statement.
**/
export class ExecuteStatementResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConsumedIOs" })
  consumedIOs?: IoUsage;

  @SpeakeasyMetadata({ data: "json, name=FirstPage" })
  firstPage?: Page;

  @SpeakeasyMetadata({ data: "json, name=TimingInformation" })
  timingInformation?: TimingInformation;
}
