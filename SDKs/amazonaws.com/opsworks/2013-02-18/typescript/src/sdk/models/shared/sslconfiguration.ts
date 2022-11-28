import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SslConfiguration
/** 
 * Describes an app's SSL configuration.
**/
export class SslConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Certificate" })
  certificate: string;

  @SpeakeasyMetadata({ data: "json, name=Chain" })
  chain?: string;

  @SpeakeasyMetadata({ data: "json, name=PrivateKey" })
  privateKey: string;
}
