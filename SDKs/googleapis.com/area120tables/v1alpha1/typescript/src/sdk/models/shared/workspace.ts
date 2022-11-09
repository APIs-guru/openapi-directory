import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Table } from "./table";


// Workspace
/** 
 * A single workspace.
**/
export class Workspace extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=tables", elemType: shared.Table })
  tables?: Table[];

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
