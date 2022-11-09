import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SamplingRule } from "./samplingrule";


// SamplingRuleRecord
/** 
 * A <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingRule.html">SamplingRule</a> and its metadata.
**/
export class SamplingRuleRecord extends SpeakeasyBase {
  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @Metadata({ data: "json, name=ModifiedAt" })
  modifiedAt?: Date;

  @Metadata({ data: "json, name=SamplingRule" })
  samplingRule?: SamplingRule;
}
