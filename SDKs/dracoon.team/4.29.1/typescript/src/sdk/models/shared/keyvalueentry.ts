import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// KeyValueEntry
/** 
 * Key-value pair
**/
export class KeyValueEntry extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
