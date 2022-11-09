import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotificationChannel
/** 
 * Notification channel information
**/
export class NotificationChannel extends SpeakeasyBase {
  @Metadata({ data: "json, name=frequency" })
  frequency: number;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=isEnabled" })
  isEnabled: boolean;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=type" })
  type: string;
}
