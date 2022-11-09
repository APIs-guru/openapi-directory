import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OnlineStoreSecurityConfig
/** 
 * The security configuration for <code>OnlineStore</code>.
**/
export class OnlineStoreSecurityConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=KmsKeyId" })
  kmsKeyId?: string;
}
