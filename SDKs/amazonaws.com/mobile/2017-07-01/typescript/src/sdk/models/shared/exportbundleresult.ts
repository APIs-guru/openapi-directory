import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExportBundleResult
/** 
 *  Result structure which contains link to download custom-generated SDK and tool packages used to integrate mobile web or app clients with backed AWS resources. 
**/
export class ExportBundleResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;
}
