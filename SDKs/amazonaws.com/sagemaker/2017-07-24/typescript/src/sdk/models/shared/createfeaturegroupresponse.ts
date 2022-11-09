import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateFeatureGroupResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeatureGroupArn" })
  featureGroupArn: string;
}
