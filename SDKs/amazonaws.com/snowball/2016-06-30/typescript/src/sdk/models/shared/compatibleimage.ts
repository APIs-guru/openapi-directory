import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CompatibleImage
/** 
 * A JSON-formatted object that describes a compatible Amazon Machine Image (AMI), including the ID and name for a Snow device AMI. This AMI is compatible with the device's physical hardware requirements, and it should be able to be run in an SBE1 instance on the device.
**/
export class CompatibleImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=AmiId" })
  amiId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
