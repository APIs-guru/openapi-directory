import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ResourceTag
/** 
 * <p>Tags are key-value pairs that can be associated with Amazon SWF state machines and activities.</p> <p>Tags may only contain unicode letters, digits, whitespace, or these symbols: <code>_ . : / = + - @</code>.</p>
**/
export class ResourceTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
