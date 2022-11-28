import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { MetadataProperties } from "./metadataproperties";
import { TrialComponentMetricSummary } from "./trialcomponentmetricsummary";
import { TrialComponentParameterValue } from "./trialcomponentparametervalue";
import { TrialComponentSource } from "./trialcomponentsource";
import { TrialComponentStatus } from "./trialcomponentstatus";



export class DescribeTrialComponentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=InputArtifacts", elemType: TrialComponentArtifact })
  inputArtifacts?: Map<string, TrialComponentArtifact>;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @SpeakeasyMetadata({ data: "json, name=Metrics", elemType: TrialComponentMetricSummary })
  metrics?: TrialComponentMetricSummary[];

  @SpeakeasyMetadata({ data: "json, name=OutputArtifacts", elemType: TrialComponentArtifact })
  outputArtifacts?: Map<string, TrialComponentArtifact>;

  @SpeakeasyMetadata({ data: "json, name=Parameters", elemType: TrialComponentParameterValue })
  parameters?: Map<string, TrialComponentParameterValue>;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: TrialComponentSource;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TrialComponentStatus;

  @SpeakeasyMetadata({ data: "json, name=TrialComponentArn" })
  trialComponentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialComponentName" })
  trialComponentName?: string;
}
