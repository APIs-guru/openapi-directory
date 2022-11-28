import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint
/** 
 * ApplicationEndpoint represents a remote application endpoint.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionApplicationEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;
}
