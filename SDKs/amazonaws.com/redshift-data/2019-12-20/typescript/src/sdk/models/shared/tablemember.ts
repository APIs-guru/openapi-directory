import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TableMember
/** 
 * The properties of a table. 
**/
export class TableMember extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=schema" })
  schema?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
