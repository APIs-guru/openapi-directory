import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScheduleAByOccupation extends SpeakeasyBase {
  @Metadata({ data: "json, name=committee_id" })
  committeeId: string;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=cycle" })
  cycle: number;

  @Metadata({ data: "json, name=occupation" })
  occupation: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
