import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OpsEntityItem
/** 
 * The OpsData summary.
**/
export class OpsEntityItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=CaptureTime" })
  captureTime?: string;

  @Metadata({ data: "json, name=Content" })
  content?: Map<string, string>[];
}
