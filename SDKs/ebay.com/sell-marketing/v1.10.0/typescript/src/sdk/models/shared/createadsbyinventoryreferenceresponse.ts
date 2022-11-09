import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AdReference } from "./adreference";
import { Error } from "./error";


// CreateAdsByInventoryReferenceResponse
/** 
 * This type defines the fields returned when you create an ad by inventory reference ID.
**/
export class CreateAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ads", elemType: shared.AdReference })
  ads?: AdReference[];

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=inventoryReferenceId" })
  inventoryReferenceId?: string;

  @Metadata({ data: "json, name=inventoryReferenceType" })
  inventoryReferenceType?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
