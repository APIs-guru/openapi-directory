import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ColumnDescription } from "./columndescription";
import { SavedView } from "./savedview";


// Table
/** 
 * A single table. NextId: 8
**/
export class Table extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns", elemType: shared.ColumnDescription })
  columns?: ColumnDescription[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=savedViews", elemType: shared.SavedView })
  savedViews?: SavedView[];

  @Metadata({ data: "json, name=timeZone" })
  timeZone?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
