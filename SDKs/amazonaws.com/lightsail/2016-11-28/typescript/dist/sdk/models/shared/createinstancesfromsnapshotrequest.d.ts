import { SpeakeasyBase } from "../../../internal/utils";
import { AddOnRequest } from "./addonrequest";
import { DiskMap } from "./diskmap";
import { IpAddressTypeEnum } from "./ipaddresstypeenum";
import { Tag } from "./tag";
export declare class CreateInstancesFromSnapshotRequest extends SpeakeasyBase {
    addOns?: AddOnRequest[];
    attachedDiskMapping?: Map<string, DiskMap[]>;
    availabilityZone: string;
    bundleId: string;
    instanceNames: string[];
    instanceSnapshotName?: string;
    ipAddressType?: IpAddressTypeEnum;
    keyPairName?: string;
    restoreDate?: string;
    sourceInstanceName?: string;
    tags?: Tag[];
    useLatestRestorableAutoSnapshot?: boolean;
    userData?: string;
}
