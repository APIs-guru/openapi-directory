import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IceServer
/** 
 * A structure for the ICE server connection data.
**/
export class IceServer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=Ttl" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "json, name=Uris" })
  uris?: string[];

  @SpeakeasyMetadata({ data: "json, name=Username" })
  username?: string;
}
