import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
import { RegionNameEnum } from "./regionnameenum";
/**
 * Describes the AWS Region.
**/
export declare class Region extends SpeakeasyBase {
    availabilityZones?: AvailabilityZone[];
    continentCode?: string;
    description?: string;
    displayName?: string;
    name?: RegionNameEnum;
    relationalDatabaseAvailabilityZones?: AvailabilityZone[];
}
