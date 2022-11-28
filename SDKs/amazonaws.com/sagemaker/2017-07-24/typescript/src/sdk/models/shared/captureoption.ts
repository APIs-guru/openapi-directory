import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CaptureModeEnum } from "./capturemodeenum";



// CaptureOption
/** 
 * <p/>
**/
export class CaptureOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CaptureMode" })
  captureMode: CaptureModeEnum;
}
