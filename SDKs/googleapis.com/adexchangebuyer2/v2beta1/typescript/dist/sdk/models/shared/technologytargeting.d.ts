import { SpeakeasyBase } from "../../../internal/utils";
import { CriteriaTargeting } from "./criteriatargeting";
import { OperatingSystemTargeting } from "./operatingsystemtargeting";
/**
 * Represents targeting about various types of technology.
**/
export declare class TechnologyTargeting extends SpeakeasyBase {
    deviceCapabilityTargeting?: CriteriaTargeting;
    deviceCategoryTargeting?: CriteriaTargeting;
    operatingSystemTargeting?: OperatingSystemTargeting;
}
