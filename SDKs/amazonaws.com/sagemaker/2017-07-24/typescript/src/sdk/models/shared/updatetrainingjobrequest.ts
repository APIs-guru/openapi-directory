import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProfilerConfigForUpdate } from "./profilerconfigforupdate";
import { ProfilerRuleConfiguration } from "./profilerruleconfiguration";



export class UpdateTrainingJobRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ProfilerConfig" })
  profilerConfig?: ProfilerConfigForUpdate;

  @SpeakeasyMetadata({ data: "json, name=ProfilerRuleConfigurations", elemType: ProfilerRuleConfiguration })
  profilerRuleConfigurations?: ProfilerRuleConfiguration[];

  @SpeakeasyMetadata({ data: "json, name=TrainingJobName" })
  trainingJobName: string;
}
