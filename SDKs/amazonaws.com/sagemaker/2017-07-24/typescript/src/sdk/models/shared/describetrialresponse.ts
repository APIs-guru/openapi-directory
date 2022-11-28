import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserContext } from "./usercontext";
import { MetadataProperties } from "./metadataproperties";
import { TrialSource } from "./trialsource";



export class DescribeTrialResponse extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=TrialArn" })
  trialArn?: string;

  @SpeakeasyMetadata({ data: "json, name=TrialName" })
  trialName?: string;
}
