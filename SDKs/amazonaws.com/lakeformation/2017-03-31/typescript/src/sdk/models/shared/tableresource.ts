import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TableResource
/** 
 * A structure for the table object. A table is a metadata definition that represents your data. You can Grant and Revoke table privileges to a principal. 
**/
export class TableResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=TableWildcard" })
  tableWildcard?: Map<string, any>;
}
