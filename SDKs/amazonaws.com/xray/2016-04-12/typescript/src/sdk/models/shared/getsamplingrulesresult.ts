import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SamplingRuleRecord } from "./samplingrulerecord";



export class GetSamplingRulesResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SamplingRuleRecords", elemType: SamplingRuleRecord })
  samplingRuleRecords?: SamplingRuleRecord[];
}
