import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SslConfiguration
/** 
 * Describes an app's SSL configuration.
**/
export class SslConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=Certificate" })
  certificate: string;

  @Metadata({ data: "json, name=Chain" })
  chain?: string;

  @Metadata({ data: "json, name=PrivateKey" })
  privateKey: string;
}
