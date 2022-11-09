import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompanyFinancialYearViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstMonth" })
  firstMonth?: number;

  @Metadata({ data: "json, name=startMonth" })
  startMonth?: number;

  @Metadata({ data: "json, name=startYear" })
  startYear?: number;
}
