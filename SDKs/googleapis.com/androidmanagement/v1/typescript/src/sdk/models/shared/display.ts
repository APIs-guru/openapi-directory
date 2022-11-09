import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DisplayStateEnum {
    DisplayStateUnspecified = "DISPLAY_STATE_UNSPECIFIED"
,    Off = "OFF"
,    On = "ON"
,    Doze = "DOZE"
,    Suspended = "SUSPENDED"
}


// Display
/** 
 * Device display information.
**/
export class Display extends SpeakeasyBase {
  @Metadata({ data: "json, name=density" })
  density?: number;

  @Metadata({ data: "json, name=displayId" })
  displayId?: number;

  @Metadata({ data: "json, name=height" })
  height?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=refreshRate" })
  refreshRate?: number;

  @Metadata({ data: "json, name=state" })
  state?: DisplayStateEnum;

  @Metadata({ data: "json, name=width" })
  width?: number;
}
