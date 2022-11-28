import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A new persistent disk or a local ssd. A VM can only have one local SSD setting but multiple local SSD partitions. https://cloud.google.com/compute/docs/disks#pdspecs. https://cloud.google.com/compute/docs/disks#localssds.
**/
export declare class Disk extends SpeakeasyBase {
    diskInterface?: string;
    image?: string;
    sizeGb?: string;
    snapshot?: string;
    type?: string;
}
