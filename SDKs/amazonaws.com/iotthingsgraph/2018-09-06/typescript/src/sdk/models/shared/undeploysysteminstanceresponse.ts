import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemInstanceSummary } from "./systeminstancesummary";



export class UndeploySystemInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=summary" })
  summary?: SystemInstanceSummary;
}
