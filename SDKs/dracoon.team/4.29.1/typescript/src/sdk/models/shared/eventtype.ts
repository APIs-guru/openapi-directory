import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EventType
/** 
 * Event type information
**/
export class EventType extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=usableCustomerAdminWebhook" })
  usableCustomerAdminWebhook: boolean;

  @Metadata({ data: "json, name=usableNodeWebhook" })
  usableNodeWebhook: boolean;

  @Metadata({ data: "json, name=usablePushNotification" })
  usablePushNotification: boolean;

  @Metadata({ data: "json, name=usableTenantWebhook" })
  usableTenantWebhook: boolean;
}
