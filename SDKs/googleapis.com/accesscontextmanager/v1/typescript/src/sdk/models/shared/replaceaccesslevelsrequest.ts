import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessLevel } from "./accesslevel";



// ReplaceAccessLevelsRequest
/** 
 * A request to replace all existing Access Levels in an Access Policy with the Access Levels provided. This is done atomically.
**/
export class ReplaceAccessLevelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessLevels", elemType: AccessLevel })
  accessLevels?: AccessLevel[];

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;
}
