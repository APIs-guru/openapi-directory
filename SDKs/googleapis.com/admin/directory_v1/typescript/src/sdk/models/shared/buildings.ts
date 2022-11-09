import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Building } from "./building";


// Buildings
/** 
 * Public API: Resources.buildings
**/
export class Buildings extends SpeakeasyBase {
  @Metadata({ data: "json, name=buildings", elemType: shared.Building })
  buildings?: Building[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
