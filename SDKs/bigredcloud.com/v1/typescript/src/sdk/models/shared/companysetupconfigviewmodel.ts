import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CompanyFinancialYearViewModel } from "./companyfinancialyearviewmodel";
import { CompanyGeneralDetaisViewModel } from "./companygeneraldetaisviewmodel";
import { CompanyOptionViewModel } from "./companyoptionviewmodel";
import { CompanyReferenceSettingViewModel } from "./companyreferencesettingviewmodel";



export class CompanySetupConfigViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=financialYear" })
  financialYear?: CompanyFinancialYearViewModel;

  @SpeakeasyMetadata({ data: "json, name=generalDetails" })
  generalDetails?: CompanyGeneralDetaisViewModel;

  @SpeakeasyMetadata({ data: "json, name=options" })
  options?: CompanyOptionViewModel;

  @SpeakeasyMetadata({ data: "json, name=referenceSettings" })
  referenceSettings?: CompanyReferenceSettingViewModel;
}
