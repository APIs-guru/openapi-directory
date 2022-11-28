import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationFeatureSetEnum } from "./organizationfeaturesetenum";



export class CreateOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FeatureSet" })
  featureSet?: OrganizationFeatureSetEnum;
}
