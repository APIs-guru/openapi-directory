import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Error } from "./error";


// DeleteAdsByInventoryReferenceResponse
/** 
 * This type defines the fields returned by request to delete a set of ads by inventory reference ID.
**/
export class DeleteAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=adIds" })
  adIds?: string[];

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];

  @Metadata({ data: "json, name=inventoryReferenceId" })
  inventoryReferenceId?: string;

  @Metadata({ data: "json, name=inventoryReferenceType" })
  inventoryReferenceType?: string;

  @Metadata({ data: "json, name=statusCode" })
  statusCode?: number;
}
