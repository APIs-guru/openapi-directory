import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpdateFavoritesBulkRequest
/** 
 * Request model for updating favorites
**/
export class UpdateFavoritesBulkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isFavorite" })
  isFavorite: boolean;

  @SpeakeasyMetadata({ data: "json, name=objectIds" })
  objectIds: number[];
}
