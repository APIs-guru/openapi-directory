import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PortMapping
/** 
 * An object representing a port mapping.
**/
export class PortMapping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationPort" })
  applicationPort: number;

  @SpeakeasyMetadata({ data: "json, name=enableOnPublicIp" })
  enableOnPublicIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=jobPort" })
  jobPort: number;
}
