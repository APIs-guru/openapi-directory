import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScheduleAByStateRecipientTotals extends SpeakeasyBase {
  @Metadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @Metadata({ data: "json, name=committee_type_full" })
  committeeTypeFull?: string;

  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=cycle" })
  cycle?: number;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=state_full" })
  stateFull?: string;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
