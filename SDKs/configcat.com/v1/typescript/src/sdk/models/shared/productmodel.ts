import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrganizationModel } from "./organizationmodel";


export class ProductModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=organization" })
  organization?: OrganizationModel;

  @Metadata({ data: "json, name=productId" })
  productId?: string;
}
