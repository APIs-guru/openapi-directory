import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateMaintenanceWindowRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AllowUnassociatedTargets" })
  allowUnassociatedTargets?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Cutoff" })
  cutoff?: number;

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=Enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Replace" })
  replace?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Schedule" })
  schedule?: string;

  @SpeakeasyMetadata({ data: "json, name=ScheduleOffset" })
  scheduleOffset?: number;

  @SpeakeasyMetadata({ data: "json, name=ScheduleTimezone" })
  scheduleTimezone?: string;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=WindowId" })
  windowId: string;
}
