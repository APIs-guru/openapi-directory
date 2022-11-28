import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PillarDifference } from "./pillardifference";



// VersionDifferences
/** 
 * The differences between the base and latest versions of the lens.
**/
export class VersionDifferences extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PillarDifferences", elemType: PillarDifference })
  pillarDifferences?: PillarDifference[];
}
