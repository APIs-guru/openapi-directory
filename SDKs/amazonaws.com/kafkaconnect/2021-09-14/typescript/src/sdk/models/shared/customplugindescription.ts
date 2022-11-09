import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomPluginDescription
/** 
 * Details about a custom plugin.
**/
export class CustomPluginDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=customPluginArn" })
  customPluginArn?: string;

  @Metadata({ data: "json, name=revision" })
  revision?: number;
}
