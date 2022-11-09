import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatabaseResource
/** 
 * A structure for the database object.
**/
export class DatabaseResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
