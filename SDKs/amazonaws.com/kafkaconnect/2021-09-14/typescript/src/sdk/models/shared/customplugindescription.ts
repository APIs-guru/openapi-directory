import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomPluginDescription
/** 
 * Details about a custom plugin.
**/
export class CustomPluginDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customPluginArn" })
  customPluginArn?: string;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: number;
}
