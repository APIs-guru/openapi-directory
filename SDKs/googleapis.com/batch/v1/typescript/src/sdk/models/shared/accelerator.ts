import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Accelerator
/** 
 * Accelerator describes Compute Engine accelerators to be attached to the VM.
**/
export class Accelerator extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=installGpuDrivers" })
  installGpuDrivers?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
