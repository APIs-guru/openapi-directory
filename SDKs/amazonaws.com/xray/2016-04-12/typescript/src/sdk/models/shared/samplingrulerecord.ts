import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SamplingRule } from "./samplingrule";



// SamplingRuleRecord
/** 
 * A <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingRule.html">SamplingRule</a> and its metadata.
**/
export class SamplingRuleRecord extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=ModifiedAt" })
  modifiedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=SamplingRule" })
  samplingRule?: SamplingRule;
}
