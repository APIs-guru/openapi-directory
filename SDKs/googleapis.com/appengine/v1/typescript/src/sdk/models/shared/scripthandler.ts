import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScriptHandler
/** 
 * Executes a script to handle the request that matches the URL pattern.
**/
export class ScriptHandler extends SpeakeasyBase {
  @Metadata({ data: "json, name=scriptPath" })
  scriptPath?: string;
}
