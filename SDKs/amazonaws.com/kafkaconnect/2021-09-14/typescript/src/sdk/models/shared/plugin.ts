import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomPlugin } from "./customplugin";


// Plugin
/** 
 * A plugin is an AWS resource that contains the code that defines your connector logic. 
**/
export class Plugin extends SpeakeasyBase {
  @Metadata({ data: "json, name=customPlugin" })
  customPlugin: CustomPlugin;
}
