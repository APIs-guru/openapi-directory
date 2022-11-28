import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AttributeValueList
/** 
 * Use the AttributeValueList to filter by string or integer values.
**/
export class AttributeValueList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=integerValues" })
  integerValues?: number[];

  @SpeakeasyMetadata({ data: "json, name=stringValues" })
  stringValues?: string[];
}
