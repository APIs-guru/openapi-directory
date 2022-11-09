import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpdateFavoritesBulkRequest
/** 
 * Request model for updating favorites
**/
export class UpdateFavoritesBulkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=isFavorite" })
  isFavorite: boolean;

  @Metadata({ data: "json, name=objectIds" })
  objectIds: number[];
}
