import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompanyFinancialYearViewModel } from "./companyfinancialyearviewmodel";
import { CompanyGeneralDetaisViewModel } from "./companygeneraldetaisviewmodel";
import { CompanyOptionViewModel } from "./companyoptionviewmodel";
import { CompanyReferenceSettingViewModel } from "./companyreferencesettingviewmodel";


export class CompanySetupConfigViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=financialYear" })
  financialYear?: CompanyFinancialYearViewModel;

  @Metadata({ data: "json, name=generalDetails" })
  generalDetails?: CompanyGeneralDetaisViewModel;

  @Metadata({ data: "json, name=options" })
  options?: CompanyOptionViewModel;

  @Metadata({ data: "json, name=referenceSettings" })
  referenceSettings?: CompanyReferenceSettingViewModel;
}
