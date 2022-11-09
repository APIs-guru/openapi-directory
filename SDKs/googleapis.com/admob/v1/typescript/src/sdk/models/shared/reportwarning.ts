import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ReportWarningTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    DataBeforeAccountTimezoneChange = "DATA_BEFORE_ACCOUNT_TIMEZONE_CHANGE"
,    DataDelayed = "DATA_DELAYED"
,    Other = "OTHER"
,    ReportCurrencyNotAccountCurrency = "REPORT_CURRENCY_NOT_ACCOUNT_CURRENCY"
}


// ReportWarning
/** 
 * Warnings associated with generation of the report.
**/
export class ReportWarning extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=type" })
  type?: ReportWarningTypeEnum;
}
