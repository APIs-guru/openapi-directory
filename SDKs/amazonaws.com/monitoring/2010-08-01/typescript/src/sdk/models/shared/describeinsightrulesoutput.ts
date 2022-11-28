import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InsightRule } from "./insightrule";



export class DescribeInsightRulesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: InsightRule })
  insightRules?: InsightRule[];

  @SpeakeasyMetadata()
  nextToken?: string;
}
