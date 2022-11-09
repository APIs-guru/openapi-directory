import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserContext } from "./usercontext";
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
  @Metadata({ data: "json, name=CreatedBy" })
  createdBy?: UserContext;

  @Metadata({ data: "json, name=CreationTime" })
  creationTime?: Date;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=ExperimentName" })
  experimentName?: string;

  @Metadata({ data: "json, name=LastModifiedBy" })
  lastModifiedBy?: UserContext;

  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @Metadata({ data: "json, name=Source" })
  source?: TrialSource;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TrialArn" })
  trialArn?: string;

  @Metadata({ data: "json, name=TrialComponentSummaries", elemType: shared.TrialComponentSimpleSummary })
  trialComponentSummaries?: TrialComponentSimpleSummary[];

  @Metadata({ data: "json, name=TrialName" })
  trialName?: string;
}
