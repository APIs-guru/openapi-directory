import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IceServer
/** 
 * A structure for the ICE server connection data.
**/
export class IceServer extends SpeakeasyBase {
  @Metadata({ data: "json, name=Password" })
  password?: string;

  @Metadata({ data: "json, name=Ttl" })
  ttl?: number;

  @Metadata({ data: "json, name=Uris" })
  uris?: string[];

  @Metadata({ data: "json, name=Username" })
  username?: string;
}
