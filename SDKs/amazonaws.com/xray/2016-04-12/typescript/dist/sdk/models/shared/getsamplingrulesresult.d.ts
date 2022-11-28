import { SpeakeasyBase } from "../../../internal/utils";
import { SamplingRuleRecord } from "./samplingrulerecord";
export declare class GetSamplingRulesResult extends SpeakeasyBase {
    nextToken?: string;
    samplingRuleRecords?: SamplingRuleRecord[];
}
