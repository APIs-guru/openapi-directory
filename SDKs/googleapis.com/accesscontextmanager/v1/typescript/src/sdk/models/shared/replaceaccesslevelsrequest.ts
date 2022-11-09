import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AccessLevel } from "./accesslevel";


// ReplaceAccessLevelsRequest
/** 
 * A request to replace all existing Access Levels in an Access Policy with the Access Levels provided. This is done atomically.
**/
export class ReplaceAccessLevelsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessLevels", elemType: shared.AccessLevel })
  accessLevels?: AccessLevel[];

  @Metadata({ data: "json, name=etag" })
  etag?: string;
}
