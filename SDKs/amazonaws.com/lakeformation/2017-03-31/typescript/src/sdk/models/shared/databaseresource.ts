import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatabaseResource
/** 
 * A structure for the database object.
**/
export class DatabaseResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
