import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScheduleEByCandidate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=candidate_name" })
  candidateName?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_id" })
  committeeId?: string;

  @SpeakeasyMetadata({ data: "json, name=committee_name" })
  committeeName?: string;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=cycle" })
  cycle: number;

  @SpeakeasyMetadata({ data: "json, name=support_oppose_indicator" })
  supportOpposeIndicator: string;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
