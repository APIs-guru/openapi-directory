import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScheduleAByOccupation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle: number;

  @SpeakeasyMetadata({ data: "json, name=occupation" })
  occupation: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
