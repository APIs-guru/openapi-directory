import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CriteriaTargeting } from "./criteriatargeting";
import { OperatingSystemTargeting } from "./operatingsystemtargeting";



// TechnologyTargeting
/** 
 * Represents targeting about various types of technology.
**/
export class TechnologyTargeting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceCapabilityTargeting" })
  deviceCapabilityTargeting?: CriteriaTargeting;

  @SpeakeasyMetadata({ data: "json, name=deviceCategoryTargeting" })
  deviceCategoryTargeting?: CriteriaTargeting;

  @SpeakeasyMetadata({ data: "json, name=operatingSystemTargeting" })
  operatingSystemTargeting?: OperatingSystemTargeting;
}
