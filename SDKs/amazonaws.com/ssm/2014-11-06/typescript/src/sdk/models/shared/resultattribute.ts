import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResultAttribute
/** 
 * The inventory item result attribute.
**/
export class ResultAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TypeName" })
  typeName: string;
}
