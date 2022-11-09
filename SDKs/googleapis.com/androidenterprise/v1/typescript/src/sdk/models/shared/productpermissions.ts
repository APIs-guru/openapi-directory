import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProductPermission } from "./productpermission";


// ProductPermissions
/** 
 * Information about the permissions required by a specific app and whether they have been accepted by the enterprise.
**/
export class ProductPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=permission", elemType: shared.ProductPermission })
  permission?: ProductPermission[];

  @Metadata({ data: "json, name=productId" })
  productId?: string;
}
