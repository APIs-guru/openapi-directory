import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SystemInstanceSummary } from "./systeminstancesummary";


export class UndeploySystemInstanceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=summary" })
  summary?: SystemInstanceSummary;
}
