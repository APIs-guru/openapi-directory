import { SpeakeasyBase } from "../../../internal/utils";
import { ProfilerConfigForUpdate } from "./profilerconfigforupdate";
import { ProfilerRuleConfiguration } from "./profilerruleconfiguration";
export declare class UpdateTrainingJobRequest extends SpeakeasyBase {
    profilerConfig?: ProfilerConfigForUpdate;
    profilerRuleConfigurations?: ProfilerRuleConfiguration[];
    trainingJobName: string;
}
