import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VmServerAddress
/** 
 * Represents a VM server location.
**/
export class VmServerAddress extends SpeakeasyBase {
  @Metadata({ data: "json, name=vmId" })
  vmId?: string;

  @Metadata({ data: "json, name=vmManagerId" })
  vmManagerId?: string;
}
