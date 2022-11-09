import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Row
/** 
 * A single row in a table.
**/
export class Row extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=values" })
  values?: Map<string, any>;
}
