import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteFeatureGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeatureGroupName" })
  featureGroupName: string;
}
