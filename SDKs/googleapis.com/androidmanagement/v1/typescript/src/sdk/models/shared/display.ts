import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DisplayStateEnum {
    DisplayStateUnspecified = "DISPLAY_STATE_UNSPECIFIED",
    Off = "OFF",
    On = "ON",
    Doze = "DOZE",
    Suspended = "SUSPENDED"
}


// Display
/** 
 * Device display information.
**/
export class Display extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=density" })
  density?: number;

  @SpeakeasyMetadata({ data: "json, name=displayId" })
  displayId?: number;

  @SpeakeasyMetadata({ data: "json, name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=refreshRate" })
  refreshRate?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DisplayStateEnum;

  @SpeakeasyMetadata({ data: "json, name=width" })
  width?: number;
}
