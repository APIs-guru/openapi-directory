import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DateRangeValues } from "./daterangevalues";
import { DateRangeValues } from "./daterangevalues";
import { ReportRow } from "./reportrow";
import { DateRangeValues } from "./daterangevalues";


// ReportData
/** 
 * The data part of the report.
**/
export class ReportData extends SpeakeasyBase {
  @Metadata({ data: "json, name=dataLastRefreshed" })
  dataLastRefreshed?: string;

  @Metadata({ data: "json, name=emptyReason" })
  emptyReason?: string;

  @Metadata({ data: "json, name=isDataGolden" })
  isDataGolden?: boolean;

  @Metadata({ data: "json, name=maximums", elemType: shared.DateRangeValues })
  maximums?: DateRangeValues[];

  @Metadata({ data: "json, name=minimums", elemType: shared.DateRangeValues })
  minimums?: DateRangeValues[];

  @Metadata({ data: "json, name=rowCount" })
  rowCount?: number;

  @Metadata({ data: "json, name=rows", elemType: shared.ReportRow })
  rows?: ReportRow[];

  @Metadata({ data: "json, name=samplesReadCounts" })
  samplesReadCounts?: string[];

  @Metadata({ data: "json, name=samplingSpaceSizes" })
  samplingSpaceSizes?: string[];

  @Metadata({ data: "json, name=totals", elemType: shared.DateRangeValues })
  totals?: DateRangeValues[];
}
