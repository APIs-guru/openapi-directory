import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { MetadataProperties } from "./metadataproperties";
import { TrialSource } from "./trialsource";
import { Tag } from "./tag";
import { TrialComponentSimpleSummary } from "./trialcomponentsimplesummary";



// Trial
/** 
 * The properties of a trial as returned by the <a>Search</a> API.
**/
export class Trial extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=ExperimentName" })
  experimentName?: string;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @SpeakeasyMetadata({ data: "json, name=Source" })
  source?: TrialSource;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TrialArn" })
  trialArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialComponentSummaries", elemType: TrialComponentSimpleSummary })
  trialComponentSummaries?: TrialComponentSimpleSummary[];

  @SpeakeasyMetadata({ data: "json, name=TrialName" })
  trialName?: string;
}
