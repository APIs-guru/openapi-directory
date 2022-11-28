import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Tag
/** 
 * A list of key/value pairs that identify a bot, bot alias, or bot channel. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @. 
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
