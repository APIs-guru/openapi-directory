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
    storageType?: string;
    supportsIops?: boolean;
    vpc?: boolean;
}
