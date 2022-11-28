import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { TrialComponentParameterValue } from "./trialcomponentparametervalue";
import { TrialComponentStatus } from "./trialcomponentstatus";



export class UpdateTrialComponentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=InputArtifacts", elemType: TrialComponentArtifact })
  inputArtifacts?: Map<string, TrialComponentArtifact>;

  @SpeakeasyMetadata({ data: "json, name=InputArtifactsToRemove" })
  inputArtifactsToRemove?: string[];

  @SpeakeasyMetadata({ data: "json, name=OutputArtifacts", elemType: TrialComponentArtifact })
  outputArtifacts?: Map<string, TrialComponentArtifact>;

  @SpeakeasyMetadata({ data: "json, name=OutputArtifactsToRemove" })
  outputArtifactsToRemove?: string[];

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: TrialComponentParameterValue })
  parameters?: Map<string, TrialComponentParameterValue>;

  @SpeakeasyMetadata({ data: "json, name=ParametersToRemove" })
  parametersToRemove?: string[];

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TrialComponentStatus;

  @SpeakeasyMetadata({ data: "json, name=TrialComponentName" })
  trialComponentName: string;
}
