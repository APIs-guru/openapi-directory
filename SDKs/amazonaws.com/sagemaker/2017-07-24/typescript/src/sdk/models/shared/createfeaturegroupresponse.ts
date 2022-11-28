import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateFeatureGroupResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeatureGroupArn" })
  featureGroupArn: string;
}
