import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SamplingStatisticSummary } from "./samplingstatisticsummary";


export class GetSamplingStatisticSummariesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SamplingStatisticSummaries", elemType: shared.SamplingStatisticSummary })
  samplingStatisticSummaries?: SamplingStatisticSummary[];
}
