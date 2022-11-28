import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryOptions } from "./deliveryoptions";
import { ReputationOptions } from "./reputationoptions";
import { SendingOptions } from "./sendingoptions";
import { Tag } from "./tag";
import { TrackingOptions } from "./trackingoptions";



// GetConfigurationSetResponse
/** 
 * Information about a configuration set.
**/
export class GetConfigurationSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ConfigurationSetName" })
  configurationSetName?: string;

  @SpeakeasyMetadata({ data: "json, name=DeliveryOptions" })
  deliveryOptions?: DeliveryOptions;

  @SpeakeasyMetadata({ data: "json, name=ReputationOptions" })
  reputationOptions?: ReputationOptions;

  @SpeakeasyMetadata({ data: "json, name=SendingOptions" })
  sendingOptions?: SendingOptions;

  @SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag })
  tags?: Tag[];

  @SpeakeasyMetadata({ data: "json, name=TrackingOptions" })
  trackingOptions?: TrackingOptions;
}
