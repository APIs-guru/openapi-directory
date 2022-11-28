import { SpeakeasyBase } from "../../../internal/utils";
import { SamplingRule } from "./samplingrule";
/**
 * A <a href="https://docs.aws.amazon.com/xray/latest/api/API_SamplingRule.html">SamplingRule</a> and its metadata.
**/
export declare class SamplingRuleRecord extends SpeakeasyBase {
    createdAt?: Date;
    modifiedAt?: Date;
    samplingRule?: SamplingRule;
}
