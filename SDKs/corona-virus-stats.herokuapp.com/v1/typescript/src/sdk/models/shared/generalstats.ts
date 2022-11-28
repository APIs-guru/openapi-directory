import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GeneralStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cases_with_outcome" })
  casesWithOutcome: number;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=critical_condition_active_cases" })
  criticalConditionActiveCases: number;

  @SpeakeasyMetadata({ data: "json, name=currently_infected" })
  currentlyInfected: number;

  @SpeakeasyMetadata({ data: "json, name=death_cases" })
  deathCases: number;

  @SpeakeasyMetadata({ data: "json, name=death_closed_cases" })
  deathClosedCases: number;

  @SpeakeasyMetadata({ data: "json, name=deleted" })
  deleted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=last_update" })
  lastUpdate: Date;

  @SpeakeasyMetadata({ data: "json, name=mild_condition_active_cases" })
  mildConditionActiveCases: number;

  @SpeakeasyMetadata({ data: "json, name=recovered_closed_cases" })
  recoveredClosedCases: number;

  @SpeakeasyMetadata({ data: "json, name=recovery_cases" })
  recoveryCases: number;

  @SpeakeasyMetadata({ data: "json, name=total_cases" })
  totalCases: number;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
