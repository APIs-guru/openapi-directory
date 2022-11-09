import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OpsItemEventSummary } from "./opsitemeventsummary";


export class ListOpsItemEventsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Summaries", elemType: shared.OpsItemEventSummary })
  summaries?: OpsItemEventSummary[];
}
