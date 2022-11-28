import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScheduleAByState extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle: number;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state: string;

  @SpeakeasyMetadata({ data: "json, name=state_full" })
  stateFull: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
