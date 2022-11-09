import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CountryStats extends SpeakeasyBase {
  @Metadata({ data: "json, name=active_cases" })
  activeCases?: number;

  @Metadata({ data: "json, name=cases_per_mill_pop" })
  casesPerMillPop?: number;

  @Metadata({ data: "json, name=country" })
  country: string;

  @Metadata({ data: "json, name=flag" })
  flag?: string;

  @Metadata({ data: "json, name=last_update" })
  lastUpdate?: Date;

  @Metadata({ data: "json, name=new_cases" })
  newCases?: number;

  @Metadata({ data: "json, name=new_deaths" })
  newDeaths?: number;

  @Metadata({ data: "json, name=serious_critical" })
  seriousCritical?: number;

  @Metadata({ data: "json, name=total_cases" })
  totalCases?: number;

  @Metadata({ data: "json, name=total_deaths" })
  totalDeaths?: number;

  @Metadata({ data: "json, name=total_recovered" })
  totalRecovered?: string;
}
