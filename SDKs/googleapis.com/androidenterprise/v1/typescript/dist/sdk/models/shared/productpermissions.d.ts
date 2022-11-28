import { SpeakeasyBase } from "../../../internal/utils";
import { ProductPermission } from "./productpermission";
/**
 * Information about the permissions required by a specific app and whether they have been accepted by the enterprise.
**/
export declare class ProductPermissions extends SpeakeasyBase {
    permission?: ProductPermission[];
    productId?: string;
}
