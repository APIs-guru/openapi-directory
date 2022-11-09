import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint
/** 
 * ApplicationEndpoint represents a remote application endpoint.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=host" })
  host?: string;

  @Metadata({ data: "json, name=port" })
  port?: number;
}
