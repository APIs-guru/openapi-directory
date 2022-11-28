import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { MetadataProperties } from "./metadataproperties";
import { TrialComponentMetricSummary } from "./trialcomponentmetricsummary";
import { TrialComponentParameterValue } from "./trialcomponentparametervalue";
import { Parent } from "./parent";
import { TrialComponentSource } from "./trialcomponentsource";
import { TrialComponentSourceDetail } from "./trialcomponentsourcedetail";
import { TrialComponentStatus } from "./trialcomponentstatus";
import { Tag } from "./tag";



// TrialComponent
/** 
 * The properties of a trial component as returned by the <a>Search</a> API.
**/
export class TrialComponent extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=Parents", elemType: Parent })
  parents?: Parent[];

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: TrialComponentSource;

  @SpeakeasyMetadata({ data: "json, name=SourceDetail" })
  sourceDetail?: TrialComponentSourceDetail;

  @SpeakeasyMetadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: TrialComponentStatus;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TrialComponentArn" })
  trialComponentArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialComponentName" })
  trialComponentName?: string;
}
