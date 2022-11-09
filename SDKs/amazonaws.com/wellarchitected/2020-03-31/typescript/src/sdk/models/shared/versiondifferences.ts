import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PillarDifference } from "./pillardifference";


// VersionDifferences
/** 
 * The differences between the base and latest versions of the lens.
**/
export class VersionDifferences extends SpeakeasyBase {
  @Metadata({ data: "json, name=PillarDifferences", elemType: shared.PillarDifference })
  pillarDifferences?: PillarDifference[];
}
