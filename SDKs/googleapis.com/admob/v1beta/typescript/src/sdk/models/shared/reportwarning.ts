import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ReportWarningTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    DataBeforeAccountTimezoneChange = "DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE",
    DataDelayed = "DATA_DELAYED",
    Other = "OTHER",
    ReportCurrencyNotAccountCurrency = "REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY"
}


// ReportWarning
/** 
 * Warnings associated with generation of the report.
**/
export class ReportWarning extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ReportWarningTypeEnum;
}
