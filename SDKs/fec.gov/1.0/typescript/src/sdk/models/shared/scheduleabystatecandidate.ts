import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScheduleAByStateCandidate extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

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
