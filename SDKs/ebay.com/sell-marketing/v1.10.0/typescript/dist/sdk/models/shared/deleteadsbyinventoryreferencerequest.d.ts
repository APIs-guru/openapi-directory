import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type defines the fields needed to delete an ad by its inventory reference ID. You must always supply both inventory_reference_id and inventory_reference_type.
**/
export declare class DeleteAdsByInventoryReferenceRequest extends SpeakeasyBase {
    inventoryReferenceId?: string;
    inventoryReferenceType?: string;
}
