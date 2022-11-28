import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// KeyValueEntry
/** 
 * Key-value pair
**/
export class KeyValueEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
