import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AttributeValueList
/** 
 * Use the AttributeValueList to filter by string or integer values.
**/
export class AttributeValueList extends SpeakeasyBase {
  @Metadata({ data: "json, name=integerValues" })
  integerValues?: number[];

  @Metadata({ data: "json, name=stringValues" })
  stringValues?: string[];
}
