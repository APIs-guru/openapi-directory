import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TableMember
/** 
 * The properties of a table. 
**/
export class TableMember extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=schema" })
  schema?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
