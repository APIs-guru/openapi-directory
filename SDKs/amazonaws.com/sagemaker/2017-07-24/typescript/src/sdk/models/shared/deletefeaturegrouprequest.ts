import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteFeatureGroupRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;
}
