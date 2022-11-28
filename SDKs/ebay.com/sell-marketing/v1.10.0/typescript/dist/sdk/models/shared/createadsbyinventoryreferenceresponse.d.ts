import { SpeakeasyBase } from "../../../internal/utils";
import { AdReference } from "./adreference";
import { Error } from "./error";
/**
 * This type defines the fields returned when you create an ad by inventory reference ID.
**/
export declare class CreateAdsByInventoryReferenceResponse extends SpeakeasyBase {
    ads?: AdReference[];
    errors?: Error[];
    inventoryReferenceId?: string;
    inventoryReferenceType?: string;
    statusCode?: number;
}
