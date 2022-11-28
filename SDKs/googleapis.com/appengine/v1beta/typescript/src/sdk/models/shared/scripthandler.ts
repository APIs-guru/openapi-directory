import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScriptHandler
/** 
 * Executes a script to handle the request that matches the URL pattern.
**/
export class ScriptHandler extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=scriptPath" })
  scriptPath?: string;
}
