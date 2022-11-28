import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SamplingStatisticSummary } from "./samplingstatisticsummary";



export class GetSamplingStatisticSummariesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SamplingStatisticSummaries", elemType: SamplingStatisticSummary })
  samplingStatisticSummaries?: SamplingStatisticSummary[];
}
