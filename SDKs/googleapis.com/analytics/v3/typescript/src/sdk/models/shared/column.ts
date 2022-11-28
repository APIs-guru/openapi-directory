import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Column
/** 
 * JSON template for a metadata column.
**/
export class Column extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
