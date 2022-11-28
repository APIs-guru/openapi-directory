import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PresidentialCoverage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @SpeakeasyMetadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=election_year" })
  electionYear?: number;
}
