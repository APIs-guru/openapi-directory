import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SavedReport } from "./savedreport";


// ListSavedReportsResponse
/** 
 * Response definition for the saved reports list rpc.
**/
export class ListSavedReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=savedReports", elemType: shared.SavedReport })
  savedReports?: SavedReport[];
}
