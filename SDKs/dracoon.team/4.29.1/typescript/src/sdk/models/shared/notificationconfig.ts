import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotificationConfig
/** 
 * Notification configuration information
**/
export class NotificationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=channelIds" })
  channelIds: number[];

  @Metadata({ data: "json, name=eventTypeName" })
  eventTypeName: string;

  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=scopeId" })
  scopeId: number;
}
