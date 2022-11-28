import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OpsEntityItem
/** 
 * The OpsData summary.
**/
export class OpsEntityItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CaptureTime" })
  captureTime?: string;

  @SpeakeasyMetadata({ data: "json, name=Content" })
  content?: Map<string, string>[];
}
