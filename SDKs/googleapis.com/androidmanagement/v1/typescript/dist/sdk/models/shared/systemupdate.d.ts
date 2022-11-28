import { SpeakeasyBase } from "../../../internal/utils";
import { FreezePeriod } from "./freezeperiod";
export declare enum SystemUpdateTypeEnum {
    SystemUpdateTypeUnspecified = "SYSTEM_UPDATE_TYPE_UNSPECIFIED",
    Automatic = "AUTOMATIC",
    Windowed = "WINDOWED",
    Postpone = "POSTPONE"
}
/**
 * Configuration for managing system updates
**/
export declare class SystemUpdate extends SpeakeasyBase {
    endMinutes?: number;
    freezePeriods?: FreezePeriod[];
    startMinutes?: number;
    type?: SystemUpdateTypeEnum;
}
