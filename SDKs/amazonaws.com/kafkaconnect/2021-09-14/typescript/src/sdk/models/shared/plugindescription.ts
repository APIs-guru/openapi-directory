import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomPluginDescription } from "./customplugindescription";



// PluginDescription
/** 
 * The description of the plugin.
**/
export class PluginDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customPlugin" })
  customPlugin?: CustomPluginDescription;
}
