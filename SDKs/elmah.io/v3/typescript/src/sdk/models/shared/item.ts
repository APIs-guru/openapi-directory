import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Item
/** 
 * Represents a key value pair.
**/
export class Item extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
