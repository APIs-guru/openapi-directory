import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ColumnHeader } from "./columnheader";
import { ReportData } from "./reportdata";



// Report
/** 
 * The data response corresponding to the request.
**/
export class Report extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columnHeader" })
  columnHeader?: ColumnHeader;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: ReportData;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
