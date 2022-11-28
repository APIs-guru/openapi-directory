import { SpeakeasyBase } from "../../../internal/utils";
import { CriteriaTargeting } from "./criteriatargeting";
/**
 * Represents targeting information for operating systems.
**/
export declare class OperatingSystemTargeting extends SpeakeasyBase {
    operatingSystemCriteria?: CriteriaTargeting;
    operatingSystemVersionCriteria?: CriteriaTargeting;
}
