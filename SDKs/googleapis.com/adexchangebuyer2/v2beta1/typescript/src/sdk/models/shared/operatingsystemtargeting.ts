import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CriteriaTargeting } from "./criteriatargeting";
import { CriteriaTargeting } from "./criteriatargeting";


// OperatingSystemTargeting
/** 
 * Represents targeting information for operating systems.
**/
export class OperatingSystemTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=operatingSystemCriteria" })
  operatingSystemCriteria?: CriteriaTargeting;

  @Metadata({ data: "json, name=operatingSystemVersionCriteria" })
  operatingSystemVersionCriteria?: CriteriaTargeting;
}
