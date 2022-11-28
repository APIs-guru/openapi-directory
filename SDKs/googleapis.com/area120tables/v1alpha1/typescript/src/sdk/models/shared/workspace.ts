import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Table } from "./table";



// Workspace
/** 
 * A single workspace.
**/
export class Workspace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=tables", elemType: Table })
  tables?: Table[];

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
