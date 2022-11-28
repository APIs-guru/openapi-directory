import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DateRangeValues } from "./daterangevalues";
import { ReportRow } from "./reportrow";



// ReportData
/** 
 * The data part of the report.
**/
export class ReportData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataLastRefreshed" })
  dataLastRefreshed?: string;

  @SpeakeasyMetadata({ data: "json, name=emptyReason" })
  emptyReason?: string;

  @SpeakeasyMetadata({ data: "json, name=isDataGolden" })
  isDataGolden?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maximums", elemType: DateRangeValues })
  maximums?: DateRangeValues[];

  @SpeakeasyMetadata({ data: "json, name=minimums", elemType: DateRangeValues })
  minimums?: DateRangeValues[];

  @SpeakeasyMetadata({ data: "json, name=rowCount" })
  rowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rows", elemType: ReportRow })
  rows?: ReportRow[];

  @SpeakeasyMetadata({ data: "json, name=samplesReadCounts" })
  samplesReadCounts?: string[];

  @SpeakeasyMetadata({ data: "json, name=samplingSpaceSizes" })
  samplingSpaceSizes?: string[];

  @SpeakeasyMetadata({ data: "json, name=totals", elemType: DateRangeValues })
  totals?: DateRangeValues[];
}
