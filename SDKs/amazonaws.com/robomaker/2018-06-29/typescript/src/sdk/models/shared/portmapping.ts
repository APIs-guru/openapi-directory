import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PortMapping
/** 
 * An object representing a port mapping.
**/
export class PortMapping extends SpeakeasyBase {
  @Metadata({ data: "json, name=applicationPort" })
  applicationPort: number;

  @Metadata({ data: "json, name=enableOnPublicIp" })
  enableOnPublicIp?: boolean;

  @Metadata({ data: "json, name=jobPort" })
  jobPort: number;
}
