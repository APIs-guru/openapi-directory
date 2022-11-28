import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetadataProperties } from "./metadataproperties";
import { Tag } from "./tag";



export class CreateTrialRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=ExperimentName" })
  experimentName: string;

  @SpeakeasyMetadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TrialName" })
  trialName: string;
}
