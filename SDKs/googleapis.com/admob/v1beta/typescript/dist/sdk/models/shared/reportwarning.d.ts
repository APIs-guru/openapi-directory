import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ReportWarningTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    DataBeforeAccountTimezoneChange = "DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE",
    DataDelayed = "DATA_DELAYED",
    Other = "OTHER",
    ReportCurrencyNotAccountCurrency = "REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY"
}
/**
 * Warnings associated with generation of the report.
**/
export declare class ReportWarning extends SpeakeasyBase {
    description?: string;
    type?: ReportWarningTypeEnum;
}
