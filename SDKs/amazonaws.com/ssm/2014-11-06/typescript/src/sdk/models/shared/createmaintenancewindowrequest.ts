import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";



export class CreateMaintenanceWindowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowUnassociatedTargets" })
  allowUnassociatedTargets: boolean;

  @SpeakeasyMetadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Cutoff" })
  cutoff: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration: number;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduleOffset" })
  scheduleOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=ScheduleTimezone" })
  scheduleTimezone?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];
}
