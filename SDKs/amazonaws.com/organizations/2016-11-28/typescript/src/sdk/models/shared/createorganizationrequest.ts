import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationFeatureSetEnum } from "./organizationfeaturesetenum";


export class CreateOrganizationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=FeatureSet" })
  featureSet?: OrganizationFeatureSetEnum;
}
