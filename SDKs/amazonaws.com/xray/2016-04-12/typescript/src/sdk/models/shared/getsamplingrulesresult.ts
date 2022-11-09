import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SamplingRuleRecord } from "./samplingrulerecord";


export class GetSamplingRulesResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SamplingRuleRecords", elemType: shared.SamplingRuleRecord })
  samplingRuleRecords?: SamplingRuleRecord[];
}
