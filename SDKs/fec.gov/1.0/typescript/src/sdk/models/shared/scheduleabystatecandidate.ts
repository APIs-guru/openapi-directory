import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScheduleAByStateCandidate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

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
