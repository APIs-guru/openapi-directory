import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CustomPluginFileDescription
/** 
 * Details about a custom plugin file.
**/
export class CustomPluginFileDescription extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileMd5" })
  fileMd5?: string;

  @Metadata({ data: "json, name=fileSize" })
  fileSize?: number;
}
