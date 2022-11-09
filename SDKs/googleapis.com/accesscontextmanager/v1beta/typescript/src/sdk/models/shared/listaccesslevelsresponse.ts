import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessLevel } from "./accesslevel";


// ListAccessLevelsResponse
/** 
 * A response to `ListAccessLevelsRequest`.
**/
export class ListAccessLevelsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessLevels", elemType: shared.AccessLevel })
  accessLevels?: AccessLevel[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
