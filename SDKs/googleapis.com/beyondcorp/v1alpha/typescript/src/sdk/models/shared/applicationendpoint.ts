import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApplicationEndpoint
/** 
 * ApplicationEndpoint represents a remote application endpoint.
**/
export class ApplicationEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;
}
