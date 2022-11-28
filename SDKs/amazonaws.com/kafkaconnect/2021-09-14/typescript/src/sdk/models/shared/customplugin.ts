import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomPlugin
/** 
 * A plugin is an AWS resource that contains the code that defines a connector's logic.
**/
export class CustomPlugin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customPluginArn" })
  customPluginArn: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision: number;
}
