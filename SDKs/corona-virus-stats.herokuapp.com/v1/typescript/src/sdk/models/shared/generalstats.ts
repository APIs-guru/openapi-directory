import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GeneralStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=cases_with_outcome" })
  casesWithOutcome: number;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=critical_condition_active_cases" })
  criticalConditionActiveCases: number;

  @Metadata({ data: "json, name=currently_infected" })
  currentlyInfected: number;

  @Metadata({ data: "json, name=death_cases" })
  deathCases: number;

  @Metadata({ data: "json, name=death_closed_cases" })
  deathClosedCases: number;

  @Metadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=last_update" })
  lastUpdate: Date;

  @Metadata({ data: "json, name=mild_condition_active_cases" })
  mildConditionActiveCases: number;

  @Metadata({ data: "json, name=recovered_closed_cases" })
  recoveredClosedCases: number;

  @Metadata({ data: "json, name=recovery_cases" })
  recoveryCases: number;

  @Metadata({ data: "json, name=total_cases" })
  totalCases: number;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
