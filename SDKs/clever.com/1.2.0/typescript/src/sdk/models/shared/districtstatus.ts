import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum DistrictStatusStateEnum {
    Running = "running",
    Pending = "pending",
    Error = "error",
    Paused = "paused"
}


export class DistrictStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=instant_login" })
  instantLogin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_sync" })
  lastSync?: string;

  @SpeakeasyMetadata({ data: "json, name=launch_date" })
  launchDate?: string;

  @SpeakeasyMetadata({ data: "json, name=pause_end" })
  pauseEnd?: string;

  @SpeakeasyMetadata({ data: "json, name=pause_start" })
  pauseStart?: string;

  @SpeakeasyMetadata({ data: "json, name=sis_type" })
  sisType?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: DistrictStatusStateEnum;
}
