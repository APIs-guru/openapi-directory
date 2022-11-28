import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Building } from "./building";



// Buildings
/** 
 * Public API: Resources.buildings
**/
export class Buildings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buildings", elemType: Building })
  buildings?: Building[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
