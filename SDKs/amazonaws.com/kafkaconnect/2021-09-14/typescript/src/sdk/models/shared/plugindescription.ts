import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomPluginDescription } from "./customplugindescription";


// PluginDescription
/** 
 * The description of the plugin.
**/
export class PluginDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=customPlugin" })
  customPlugin?: CustomPluginDescription;
}
