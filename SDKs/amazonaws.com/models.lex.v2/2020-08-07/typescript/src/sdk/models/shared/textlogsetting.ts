import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TextLogDestination } from "./textlogdestination";


// TextLogSetting
/** 
 * Defines settings to enable text conversation logs.
**/
export class TextLogSetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=destination" })
  destination: TextLogDestination;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;
}
