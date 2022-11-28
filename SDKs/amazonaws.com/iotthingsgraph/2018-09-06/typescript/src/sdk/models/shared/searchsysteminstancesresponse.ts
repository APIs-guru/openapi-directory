import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SystemInstanceSummary } from "./systeminstancesummary";



export class SearchSystemInstancesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=summaries", elemType: SystemInstanceSummary })
  summaries?: SystemInstanceSummary[];
}
