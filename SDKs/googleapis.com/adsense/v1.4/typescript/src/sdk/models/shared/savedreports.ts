import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SavedReport } from "./savedreport";



export class SavedReports extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: SavedReport })
  items?: SavedReport[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
