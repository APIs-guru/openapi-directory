import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScheduleAByStateRecipientTotals extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=committee_type" })
  committeeType?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_type_full" })
  committeeTypeFull?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle?: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=state_full" })
  stateFull?: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
