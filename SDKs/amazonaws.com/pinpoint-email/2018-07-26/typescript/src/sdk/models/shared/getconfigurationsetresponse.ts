import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=ConfigurationSetName" })
  configurationSetName?: string;

  @Metadata({ data: "json, name=DeliveryOptions" })
  deliveryOptions?: DeliveryOptions;

  @Metadata({ data: "json, name=ReputationOptions" })
  reputationOptions?: ReputationOptions;

  @Metadata({ data: "json, name=SendingOptions" })
  sendingOptions?: SendingOptions;

  @Metadata({ data: "json, name=Tags", elemType: shared.Tag })
  tags?: Tag[];

  @Metadata({ data: "json, name=TrackingOptions" })
  trackingOptions?: TrackingOptions;
}
