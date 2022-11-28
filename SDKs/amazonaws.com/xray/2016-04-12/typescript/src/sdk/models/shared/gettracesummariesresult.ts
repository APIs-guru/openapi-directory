import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TraceSummary } from "./tracesummary";



export class GetTraceSummariesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApproximateTime" })
  approximateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=TraceSummaries", elemType: TraceSummary })
  traceSummaries?: TraceSummary[];

  @SpeakeasyMetadata({ data: "json, name=TracesProcessedCount" })
  tracesProcessedCount?: number;
}
