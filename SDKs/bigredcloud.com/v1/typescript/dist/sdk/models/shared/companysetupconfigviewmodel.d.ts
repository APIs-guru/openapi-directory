import { SpeakeasyBase } from "../../../internal/utils";
import { CompanyFinancialYearViewModel } from "./companyfinancialyearviewmodel";
import { CompanyGeneralDetaisViewModel } from "./companygeneraldetaisviewmodel";
import { CompanyOptionViewModel } from "./companyoptionviewmodel";
import { CompanyReferenceSettingViewModel } from "./companyreferencesettingviewmodel";
export declare class CompanySetupConfigViewModel extends SpeakeasyBase {
    financialYear?: CompanyFinancialYearViewModel;
    generalDetails?: CompanyGeneralDetaisViewModel;
    options?: CompanyOptionViewModel;
    referenceSettings?: CompanyReferenceSettingViewModel;
}
