import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DistrictStatusStateEnum {
    Running = "running"
,    Pending = "pending"
,    Error = "error"
,    Paused = "paused"
}


export class DistrictStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=instant_login" })
  instantLogin?: boolean;

  @Metadata({ data: "json, name=last_sync" })
  lastSync?: string;

  @Metadata({ data: "json, name=launch_date" })
  launchDate?: string;

  @Metadata({ data: "json, name=pause_end" })
  pauseEnd?: string;

  @Metadata({ data: "json, name=pause_start" })
  pauseStart?: string;

  @Metadata({ data: "json, name=sis_type" })
  sisType?: string;

  @Metadata({ data: "json, name=state" })
  state?: DistrictStatusStateEnum;
}
