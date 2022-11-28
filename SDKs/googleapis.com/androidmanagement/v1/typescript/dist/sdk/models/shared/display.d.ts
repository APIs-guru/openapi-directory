import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DisplayStateEnum {
    DisplayStateUnspecified = "DISPLAY_STATE_UNSPECIFIED",
    Off = "OFF",
    On = "ON",
    Doze = "DOZE",
    Suspended = "SUSPENDED"
}
/**
 * Device display information.
**/
export declare class Display extends SpeakeasyBase {
    density?: number;
    displayId?: number;
    height?: number;
    name?: string;
    refreshRate?: number;
    state?: DisplayStateEnum;
    width?: number;
}
