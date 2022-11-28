import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TlsPolicyEnum } from "./tlspolicyenum";



// DeliveryOptions
/** 
 * Used to associate a configuration set with a dedicated IP pool.
**/
export class DeliveryOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SendingPoolName" })
  sendingPoolName?: string;

  @SpeakeasyMetadata({ data: "json, name=TlsPolicy" })
  tlsPolicy?: TlsPolicyEnum;
}
