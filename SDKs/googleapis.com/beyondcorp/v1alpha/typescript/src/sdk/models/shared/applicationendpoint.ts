import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApplicationEndpoint
/** 
 * ApplicationEndpoint represents a remote application endpoint.
**/
export class ApplicationEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;
}
