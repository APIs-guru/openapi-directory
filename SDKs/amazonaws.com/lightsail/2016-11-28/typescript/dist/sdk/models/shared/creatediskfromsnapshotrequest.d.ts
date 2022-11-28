import { SpeakeasyBase } from "../../../internal/utils";
import { AddOnRequest } from "./addonrequest";
import { Tag } from "./tag";
export declare class CreateDiskFromSnapshotRequest extends SpeakeasyBase {
    addOns?: AddOnRequest[];
    availabilityZone: string;
    diskName: string;
    diskSnapshotName?: string;
    restoreDate?: string;
    sizeInGb: number;
    sourceDiskName?: string;
    tags?: Tag[];
    useLatestRestorableAutoSnapshot?: boolean;
}
