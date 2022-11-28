import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomPlugin } from "./customplugin";



// Plugin
/** 
 * A plugin is an AWS resource that contains the code that defines your connector logic. 
**/
export class Plugin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customPlugin" })
  customPlugin: CustomPlugin;
}
