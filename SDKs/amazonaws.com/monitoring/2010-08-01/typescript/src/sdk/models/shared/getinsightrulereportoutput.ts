import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightRuleContributor } from "./insightrulecontributor";
import { InsightRuleMetricDatapoint } from "./insightrulemetricdatapoint";



export class GetInsightRuleReportOutput extends SpeakeasyBase {
  @SpeakeasyMetadata()
  aggregateValue?: number;

  @SpeakeasyMetadata()
  aggregationStatistic?: string;

  @SpeakeasyMetadata()
  approximateUniqueCount?: number;

  @SpeakeasyMetadata({ elemType: InsightRuleContributor })
  contributors?: InsightRuleContributor[];

  @SpeakeasyMetadata()
  keyLabels?: string[];

  @SpeakeasyMetadata({ elemType: InsightRuleMetricDatapoint })
  metricDatapoints?: InsightRuleMetricDatapoint[];
}
