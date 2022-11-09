import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ColumnHeader } from "./columnheader";
import { ReportData } from "./reportdata";


// Report
/** 
 * The data response corresponding to the request.
**/
export class Report extends SpeakeasyBase {
  @Metadata({ data: "json, name=columnHeader" })
  columnHeader?: ColumnHeader;

  @Metadata({ data: "json, name=data" })
  data?: ReportData;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
