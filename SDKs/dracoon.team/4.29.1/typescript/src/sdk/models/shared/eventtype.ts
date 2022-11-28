import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventType
/** 
 * Event type information
**/
export class EventType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=usableCustomerAdminWebhook" })
  usableCustomerAdminWebhook: boolean;

  @SpeakeasyMetadata({ data: "json, name=usableNodeWebhook" })
  usableNodeWebhook: boolean;

  @SpeakeasyMetadata({ data: "json, name=usablePushNotification" })
  usablePushNotification: boolean;

  @SpeakeasyMetadata({ data: "json, name=usableTenantWebhook" })
  usableTenantWebhook: boolean;
}
