import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationConfig
/** 
 * Notification configuration information
**/
export class NotificationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=channelIds" })
  channelIds: number[];

  @SpeakeasyMetadata({ data: "json, name=eventTypeName" })
  eventTypeName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=scopeId" })
  scopeId: number;
}
