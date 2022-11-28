import { SpeakeasyBase } from "../../../internal/utils";
import { Gcs } from "./gcs";
import { Nfs } from "./nfs";
/**
 * Volume describes a volume and parameters for it to be mounted to a VM.
**/
export declare class Volume extends SpeakeasyBase {
    deviceName?: string;
    gcs?: Gcs;
    mountOptions?: string[];
    mountPath?: string;
    nfs?: Nfs;
}
