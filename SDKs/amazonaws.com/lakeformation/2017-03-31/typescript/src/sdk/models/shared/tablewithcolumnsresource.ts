import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnWildcard } from "./columnwildcard";



// TableWithColumnsResource
/** 
 * <p>A structure for a table with columns object. This object is only used when granting a SELECT permission.</p> <p>This object must take a value for at least one of <code>ColumnsNames</code>, <code>ColumnsIndexes</code>, or <code>ColumnsWildcard</code>.</p>
**/
export class TableWithColumnsResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CatalogId" })
  catalogId?: string;

  @SpeakeasyMetadata({ data: "json, name=ColumnNames" })
  columnNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=ColumnWildcard" })
  columnWildcard?: ColumnWildcard;

  @SpeakeasyMetadata({ data: "json, name=DatabaseName" })
  databaseName: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}
