import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Tag } from "./tag";


export class CreateMaintenanceWindowRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AllowUnassociatedTargets" })
  allowUnassociatedTargets: boolean;

  @Metadata({ data: "json, name=ClientToken" })
  clientToken?: string;

  @Metadata({ data: "json, name=Cutoff" })
  cutoff: number;

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Duration" })
  duration: number;

  @Metadata({ data: "json, name=EndDate" })
  endDate?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=Schedule" })
  schedule: string;

  @Metadata({ data: "json, name=ScheduleOffset" })
  scheduleOffset?: number;

  @Metadata({ data: "json, name=ScheduleTimezone" })
  scheduleTimezone?: string;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: string;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];
}
