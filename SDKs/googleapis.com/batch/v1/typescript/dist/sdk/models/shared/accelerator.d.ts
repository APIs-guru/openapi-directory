import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Accelerator describes Compute Engine accelerators to be attached to the VM.
**/
export declare class Accelerator extends SpeakeasyBase {
    count?: string;
    installGpuDrivers?: boolean;
    type?: string;
}
