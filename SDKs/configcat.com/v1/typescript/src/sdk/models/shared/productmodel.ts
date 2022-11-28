import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrganizationModel } from "./organizationmodel";



export class ProductModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: OrganizationModel;

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}
