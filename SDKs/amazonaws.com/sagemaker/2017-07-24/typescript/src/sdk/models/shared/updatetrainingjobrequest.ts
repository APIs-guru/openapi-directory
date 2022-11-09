import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProfilerConfigForUpdate } from "./profilerconfigforupdate";
import { ProfilerRuleConfiguration } from "./profilerruleconfiguration";


export class UpdateTrainingJobRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ProfilerConfig" })
  profilerConfig?: ProfilerConfigForUpdate;

  @Metadata({ data: "json, name=ProfilerRuleConfigurations", elemType: shared.ProfilerRuleConfiguration })
  profilerRuleConfigurations?: ProfilerRuleConfiguration[];

  @Metadata({ data: "json, name=TrainingJobName" })
  trainingJobName: string;
}
