import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationChannel
/** 
 * Notification channel information
**/
export class NotificationChannel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=frequency" })
  frequency: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=isEnabled" })
  isEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}
