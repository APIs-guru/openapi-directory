import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportFooter } from "./reportfooter";
import { ReportHeader } from "./reportheader";
import { ReportRow } from "./reportrow";



// GenerateNetworkReportResponse
/** 
 * The streaming response for the AdMob Network report where the first response contains the report header, then a stream of row responses, and finally a footer as the last response message. For example: [{ "header": { "dateRange": { "startDate": {"year": 2018, "month": 9, "day": 1}, "endDate": {"year": 2018, "month": 9, "day": 1} }, "localizationSettings": { "currencyCode": "USD", "languageCode": "en-US" } } }, { "row": { "dimensionValues": { "DATE": {"value": "20180918"}, "APP": { "value": "ca-app-pub-8123415297019784~1001342552", displayLabel: "My app name!" } }, "metricValues": { "ESTIMATED_EARNINGS": {"microsValue": 6500000} } } }, { "footer": {"matchingRowCount": 1} }]
**/
export class GenerateNetworkReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=footer" })
  footer?: ReportFooter;

  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: ReportHeader;

  @SpeakeasyMetadata({ data: "json, name=row" })
  row?: ReportRow;
}
