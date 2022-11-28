import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TableResource
/** 
 * A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. 
**/
export class TableResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=TableWildcard" })
  tableWildcard?: Map<string, any>;
}
