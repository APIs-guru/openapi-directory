import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ColumnWildcard } from "./columnwildcard";


// TableWithColumnsResource
/** 
 * <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p>
**/
export class TableWithColumnsResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @Metadata({ data: "json, name=ColumnNames" })
  columnNames?: string[];

  @Metadata({ data: "json, name=ColumnWildcard" })
  columnWildcard?: ColumnWildcard;

  @Metadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}
