import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TextLogDestination } from "./textlogdestination";



// TextLogSetting
/** 
 * Defines settings to enable text conversation logs.
**/
export class TextLogSetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: TextLogDestination;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;
}
