import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OpsItemEventSummary } from "./opsitemeventsummary";



export class ListOpsItemEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Summaries", elemType: OpsItemEventSummary })
  summaries?: OpsItemEventSummary[];
}
