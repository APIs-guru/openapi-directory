import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExportBundleResult
/** 
 *  Result structure which contains link to download custom-generated SDK and tool packages used to integrate mobile web or app clients with backed AWS resources. 
**/
export class ExportBundleResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=downloadUrl" })
  downloadUrl?: string;
}
