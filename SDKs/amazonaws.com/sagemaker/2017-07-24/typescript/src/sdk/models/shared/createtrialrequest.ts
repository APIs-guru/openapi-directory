import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MetadataProperties } from "./metadataproperties";
import { Tag } from "./tag";


export class CreateTrialRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=ExperimentName" })
  experimentName: string;

  @Metadata({ data: "json, name=MetadataProperties" })
  metadataProperties?: MetadataProperties;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TrialName" })
  trialName: string;
}
