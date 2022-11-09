import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FreezePeriod } from "./freezeperiod";

export enum SystemUpdateTypeEnum {
    SystemUpdateTypeUnspecified = "SYSTEM_UPDATE_TYPE_UNSPECIFIED"
,    Automatic = "AUTOMATIC"
,    Windowed = "WINDOWED"
,    Postpone = "POSTPONE"
}


// SystemUpdate
/** 
 * Configuration for managing system updates
**/
export class SystemUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=endMinutes" })
  endMinutes?: number;

  @Metadata({ data: "json, name=freezePeriods", elemType: shared.FreezePeriod })
  freezePeriods?: FreezePeriod[];

  @Metadata({ data: "json, name=startMinutes" })
  startMinutes?: number;

  @Metadata({ data: "json, name=type" })
  type?: SystemUpdateTypeEnum;
}
