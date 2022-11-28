import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
/**
 * Describes an orderable cluster option.
**/
export declare class OrderableClusterOption extends SpeakeasyBase {
    availabilityZones?: AvailabilityZone[];
    clusterType?: string;
    clusterVersion?: string;
    nodeType?: string;
}
