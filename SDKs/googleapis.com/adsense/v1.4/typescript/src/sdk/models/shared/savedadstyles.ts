import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SavedAdStyle } from "./savedadstyle";



export class SavedAdStyles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: SavedAdStyle })
  items?: SavedAdStyle[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
