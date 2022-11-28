import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnDescription } from "./columndescription";
import { SavedView } from "./savedview";



// Table
/** 
 * A single table. NextId: 8
**/
export class Table extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns", elemType: ColumnDescription })
  columns?: ColumnDescription[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=savedViews", elemType: SavedView })
  savedViews?: SavedView[];

  @SpeakeasyMetadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
