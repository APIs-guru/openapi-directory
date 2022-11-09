import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { MetadataProperties } from "./metadataproperties";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { TrialComponentParameterValue } from "./trialcomponentparametervalue";
import { TrialComponentStatus } from "./trialcomponentstatus";
import { Tag } from "./tag";


export class CreateTrialComponentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=InputArtifacts", elemType: shared.TrialComponentArtifact })
  inputArtifacts?: Map<string, TrialComponentArtifact>;

  @Metadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @Metadata({ data: "json, name=OutputArtifacts", elemType: shared.TrialComponentArtifact })
  outputArtifacts?: Map<string, TrialComponentArtifact>;

  @Metadata({ data: "json, name=Parameters", elemType: shared.TrialComponentParameterValue })
  parameters?: Map<string, TrialComponentParameterValue>;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: TrialComponentStatus;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TrialComponentName" })
  trialComponentName: string;
}
