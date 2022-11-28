import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AdReference } from "./adreference";
import { Error } from "./error";



// CreateAdsByInventoryReferenceResponse
/** 
 * This type defines the fields returned when you create an ad by inventory reference ID.
**/
export class CreateAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ads", elemType: AdReference })
  ads?: AdReference[];

  @SpeakeasyMetadata({ data: "json, name=errors", elemType: Error })
  errors?: Error[];

  @SpeakeasyMetadata({ data: "json, name=inventoryReferenceId" })
  inventoryReferenceId?: string;

  @SpeakeasyMetadata({ data: "json, name=inventoryReferenceType" })
  inventoryReferenceType?: string;

  @SpeakeasyMetadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
