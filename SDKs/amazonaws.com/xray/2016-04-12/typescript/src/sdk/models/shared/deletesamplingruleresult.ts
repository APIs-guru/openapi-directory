import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SamplingRuleRecord } from "./samplingrulerecord";


export class DeleteSamplingRuleResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=SamplingRuleRecord" })
  samplingRuleRecord?: SamplingRuleRecord;
}
