import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { MetadataProperties } from "./metadataproperties";
import { TrialComponentParameterValue } from "./trialcomponentparametervalue";
import { TrialComponentStatus } from "./trialcomponentstatus";
import { Tag } from "./tag";



export class CreateTrialComponentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=InputArtifacts", elemType: TrialComponentArtifact })
  inputArtifacts?: Map<string, TrialComponentArtifact>;

  @SpeakeasyMetadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @SpeakeasyMetadata({ data: "json, name=OutputArtifacts", elemType: TrialComponentArtifact })
  outputArtifacts?: Map<string, TrialComponentArtifact>;

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: TrialComponentParameterValue })
  parameters?: Map<string, TrialComponentParameterValue>;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TrialComponentStatus;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TrialComponentName" })
  trialComponentName: string;
}
