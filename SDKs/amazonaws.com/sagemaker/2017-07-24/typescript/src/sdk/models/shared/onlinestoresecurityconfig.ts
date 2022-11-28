import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OnlineStoreSecurityConfig
/** 
 * The security configuration for <code>OnlineStore</code>.
**/
export class OnlineStoreSecurityConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;
}
