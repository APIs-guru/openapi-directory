import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CriteriaTargeting } from "./criteriatargeting";
import { CriteriaTargeting } from "./criteriatargeting";
import { OperatingSystemTargeting } from "./operatingsystemtargeting";


// TechnologyTargeting
/** 
 * Represents targeting about various types of technology.
**/
export class TechnologyTargeting extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceCapabilityTargeting" })
  deviceCapabilityTargeting?: CriteriaTargeting;

  @Metadata({ data: "json, name=deviceCategoryTargeting" })
  deviceCategoryTargeting?: CriteriaTargeting;

  @Metadata({ data: "json, name=operatingSystemTargeting" })
  operatingSystemTargeting?: OperatingSystemTargeting;
}
