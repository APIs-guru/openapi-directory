import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompanyFinancialYearViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstMonth" })
  firstMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=startMonth" })
  startMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=startYear" })
  startYear?: number;
}
