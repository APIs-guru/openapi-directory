import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CaptureModeEnum } from "./capturemodeenum";


// CaptureOption
/** 
 * <p/>
**/
export class CaptureOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=CaptureMode" })
  captureMode: CaptureModeEnum;
}
