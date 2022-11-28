import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CriteriaTargeting } from "./criteriatargeting";



// OperatingSystemTargeting
/** 
 * Represents targeting information for operating systems.
**/
export class OperatingSystemTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operatingSystemCriteria" })
  operatingSystemCriteria?: CriteriaTargeting;

  @SpeakeasyMetadata({ data: "json, name=operatingSystemVersionCriteria" })
  operatingSystemVersionCriteria?: CriteriaTargeting;
}
