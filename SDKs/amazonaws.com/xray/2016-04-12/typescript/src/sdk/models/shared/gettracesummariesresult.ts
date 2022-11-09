import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TraceSummary } from "./tracesummary";


export class GetTraceSummariesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=ApproximateTime" })
  approximateTime?: Date;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=TraceSummaries", elemType: shared.TraceSummary })
  traceSummaries?: TraceSummary[];

  @Metadata({ data: "json, name=TracesProcessedCount" })
  tracesProcessedCount?: number;
}
