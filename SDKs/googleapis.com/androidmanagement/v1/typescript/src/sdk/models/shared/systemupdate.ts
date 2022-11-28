import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FreezePeriod } from "./freezeperiod";


export enum SystemUpdateTypeEnum {
    SystemUpdateTypeUnspecified = "SYSTEM_UPDATE_TYPE_UNSPECIFIED",
    Automatic = "AUTOMATIC",
    Windowed = "WINDOWED",
    Postpone = "POSTPONE"
}


// SystemUpdate
/** 
 * Configuration for managing system updates
**/
export class SystemUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endMinutes" })
  endMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=freezePeriods", elemType: FreezePeriod })
  freezePeriods?: FreezePeriod[];

  @SpeakeasyMetadata({ data: "json, name=startMinutes" })
  startMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SystemUpdateTypeEnum;
}
