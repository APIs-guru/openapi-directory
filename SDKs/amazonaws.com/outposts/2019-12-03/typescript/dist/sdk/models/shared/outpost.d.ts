import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about an Outpost.
**/
export declare class Outpost extends SpeakeasyBase {
    availabilityZone?: string;
    availabilityZoneId?: string;
    description?: string;
    lifeCycleStatus?: string;
    name?: string;
    outpostArn?: string;
    outpostId?: string;
    ownerId?: string;
    siteArn?: string;
    siteId?: string;
    tags?: Map<string, string>;
}
