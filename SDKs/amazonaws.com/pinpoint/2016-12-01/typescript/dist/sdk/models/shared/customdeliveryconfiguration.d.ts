import { SpeakeasyBase } from "../../../internal/utils";
import { EndpointTypesElementEnum } from "./endpointtypeselementenum";
/**
 * Specifies the delivery configuration settings for sending a campaign or campaign treatment through a custom channel. This object is required if you use the CampaignCustomMessage object to define the message to send for the campaign or campaign treatment.
**/
export declare class CustomDeliveryConfiguration extends SpeakeasyBase {
    deliveryUri: string;
    endpointTypes?: EndpointTypesElementEnum[];
}
