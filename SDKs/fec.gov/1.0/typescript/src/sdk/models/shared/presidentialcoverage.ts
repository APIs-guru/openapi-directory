import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PresidentialCoverage extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidate_id" })
  candidateId?: string;

  @Metadata({ data: "json, name=coverage_end_date" })
  coverageEndDate?: Date;

  @Metadata({ data: "json, name=election_year" })
  electionYear?: number;
}
