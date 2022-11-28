import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProductPermission } from "./productpermission";



// ProductPermissions
/** 
 * Information about the permissions required by a specific app and whether they have been accepted by the enterprise.
**/
export class ProductPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permission", elemType: ProductPermission })
  permission?: ProductPermission[];

  @SpeakeasyMetadata({ data: "json, name=productId" })
  productId?: string;
}
