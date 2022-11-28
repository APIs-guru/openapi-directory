import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EndpointTypesElementEnum } from "./endpointtypeselementenum";



// CustomDeliveryConfiguration
/** 
 * Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment.
**/
export class CustomDeliveryConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeliveryUri" })
  deliveryUri: string;

  @SpeakeasyMetadata({ data: "json, name=EndpointTypes" })
  endpointTypes?: EndpointTypesElementEnum[];
}
