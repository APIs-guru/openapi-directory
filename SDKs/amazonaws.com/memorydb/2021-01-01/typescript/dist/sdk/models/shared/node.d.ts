import { SpeakeasyBase } from "../../../internal/utils";
import { Endpoint } from "./endpoint";
/**
 * Represents an individual node within a cluster. Each node runs its own instance of the cluster's protocol-compliant caching software.
**/
export declare class Node extends SpeakeasyBase {
    availabilityZone?: string;
    createTime?: Date;
    endpoint?: Endpoint;
    name?: string;
    status?: string;
}
