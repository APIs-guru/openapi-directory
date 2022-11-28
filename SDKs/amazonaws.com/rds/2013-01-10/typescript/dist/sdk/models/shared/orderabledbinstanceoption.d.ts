import { SpeakeasyBase } from "../../../internal/utils";
import { AvailabilityZone } from "./availabilityzone";
export declare class OrderableDbInstanceOption extends SpeakeasyBase {
    availabilityZones?: AvailabilityZone[];
    dbInstanceClass?: string;
    engine?: string;
    engineVersion?: string;
    licenseModel?: string;
    multiAzCapable?: boolean;
    readReplicaCapable?: boolean;
    vpc?: boolean;
}
