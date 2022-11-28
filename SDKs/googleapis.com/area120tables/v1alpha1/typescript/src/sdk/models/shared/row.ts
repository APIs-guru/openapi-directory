import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Row
/** 
 * A single row in a table.
**/
export class Row extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: Map<string, any>;
}
