import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessLevel } from "./accesslevel";



// ListAccessLevelsResponse
/** 
 * A response to `ListAccessLevelsRequest`.
**/
export class ListAccessLevelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessLevels", elemType: AccessLevel })
  accessLevels?: AccessLevel[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
