import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ResultAttribute
/** 
 * The inventory item result attribute.
**/
export class ResultAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=TypeName" })
  typeName: string;
}
