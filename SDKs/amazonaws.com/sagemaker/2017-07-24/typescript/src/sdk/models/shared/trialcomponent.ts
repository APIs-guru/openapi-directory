import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserContext } from "./usercontext";
import { TrialComponentArtifact } from "./trialcomponentartifact";
import { UserContext } from "./usercontext";
import { MetadataProperties } from "./metadataproperties";
import { TrialComponentMetricSummary } from "./trialcomponentmetricsummary";
import { TrialComponentArtifact } from "./trialcomponentartifact";
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
  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=EndTime" })
  endTime?: Date;

  @Metadata({ data: "json, name=InputArtifacts", elemType: shared.TrialComponentArtifact })
  inputArtifacts?: Map<string, TrialComponentArtifact>;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @Metadata({ data: "json, name=Metrics", elemType: shared.TrialComponentMetricSummary })
  metrics?: TrialComponentMetricSummary[];

  @Metadata({ data: "json, name=OutputArtifacts", elemType: shared.TrialComponentArtifact })
  outputArtifacts?: Map<string, TrialComponentArtifact>;

  @Metadata({ data: "json, name=Parameters", elemType: shared.TrialComponentParameterValue })
  parameters?: Map<string, TrialComponentParameterValue>;

  @Metadata({ data: "json, name=Parents", elemType: shared.Parent })
  parents?: Parent[];

  @Metadata({ data: "json, name=Source" })
  source?: TrialComponentSource;

  @Metadata({ data: "json, name=SourceDetail" })
  sourceDetail?: TrialComponentSourceDetail;

  @Metadata({ data: "json, name=StartTime" })
  startTime?: Date;

  @Metadata({ data: "json, name=Status" })
  status?: TrialComponentStatus;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TrialComponentArn" })
  trialComponentArn?: string;

  @Metadata({ data: "json, name=TrialComponentName" })
  trialComponentName?: string;
}
