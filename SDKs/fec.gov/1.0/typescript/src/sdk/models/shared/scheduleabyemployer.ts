import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScheduleAByEmployer extends SpeakeasyBase {
  @Metadata({ data: "json, name=committee_id" })
  committeeId: string;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=cycle" })
  cycle: number;

  @Metadata({ data: "json, name=employer" })
  employer: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
