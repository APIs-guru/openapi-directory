import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Column
/** 
 * JSON template for a metadata column.
**/
export class Column extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
