import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SamplingRuleRecord } from "./samplingrulerecord";



export class DeleteSamplingRuleResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SamplingRuleRecord" })
  samplingRuleRecord?: SamplingRuleRecord;
}
