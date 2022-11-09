import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomPlugin
/** 
 * A plugin is an AWS resource that contains the code that defines a connector's logic.
**/
export class CustomPlugin extends SpeakeasyBase {
  @Metadata({ data: "json, name=customPluginArn" })
  customPluginArn: string;

  @Metadata({ data: "json, name=revision" })
  revision: number;
}
