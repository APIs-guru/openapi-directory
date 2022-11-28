import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CountryStats extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_cases" })
  activeCases?: number;

  @SpeakeasyMetadata({ data: "json, name=cases_per_mill_pop" })
  casesPerMillPop?: number;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "json, name=flag" })
  flag?: string;

  @SpeakeasyMetadata({ data: "json, name=last_update" })
  lastUpdate?: Date;

  @SpeakeasyMetadata({ data: "json, name=new_cases" })
  newCases?: number;

  @SpeakeasyMetadata({ data: "json, name=new_deaths" })
  newDeaths?: number;

  @SpeakeasyMetadata({ data: "json, name=serious_critical" })
  seriousCritical?: number;

  @SpeakeasyMetadata({ data: "json, name=total_cases" })
  totalCases?: number;

  @SpeakeasyMetadata({ data: "json, name=total_deaths" })
  totalDeaths?: number;

  @SpeakeasyMetadata({ data: "json, name=total_recovered" })
  totalRecovered?: string;
}
