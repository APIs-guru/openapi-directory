import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SavedReport } from "./savedreport";



// ListSavedReportsResponse
/** 
 * Response definition for the saved reports list rpc.
**/
export class ListSavedReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=savedReports", elemType: SavedReport })
  savedReports?: SavedReport[];
}
