import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TlsPolicyEnum } from "./tlspolicyenum";


// DeliveryOptions
/** 
 * Used to associate a configuration set with a dedicated IP pool.
**/
export class DeliveryOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=SendingPoolName" })
  sendingPoolName?: string;

  @Metadata({ data: "json, name=TlsPolicy" })
  tlsPolicy?: TlsPolicyEnum;
}
