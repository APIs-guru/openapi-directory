import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Script
/** 
 * Script runnable.
**/
export class Script extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;
}
