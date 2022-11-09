import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Item
/** 
 * Represents a key value pair.
**/
export class Item extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
