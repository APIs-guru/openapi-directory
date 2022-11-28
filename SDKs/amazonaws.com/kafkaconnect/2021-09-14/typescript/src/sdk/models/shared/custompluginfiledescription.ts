import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomPluginFileDescription
/** 
 * Details about a custom plugin file.
**/
export class CustomPluginFileDescription extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fileMd5" })
  fileMd5?: string;

  @SpeakeasyMetadata({ data: "json, name=fileSize" })
  fileSize?: number;
}
