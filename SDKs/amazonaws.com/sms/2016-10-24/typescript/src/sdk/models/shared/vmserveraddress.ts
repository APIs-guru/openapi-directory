import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VmServerAddress
/** 
 * Represents a VM server location.
**/
export class VmServerAddress extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vmId" })
  vmId?: string;

  @SpeakeasyMetadata({ data: "json, name=vmManagerId" })
  vmManagerId?: string;
}
