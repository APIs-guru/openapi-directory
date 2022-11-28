import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint
/** 
 * ApplicationEndpoint represents a remote application endpoint.
**/
export class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionApplicationEndpoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=port" })
  port?: number;
}
