import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MemberDefinition } from "./memberdefinition";
import { NotificationConfiguration } from "./notificationconfiguration";



export class UpdateWorkteamRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=MemberDefinitions", elemType: MemberDefinition })
  memberDefinitions?: MemberDefinition[];

  @SpeakeasyMetadata({ data: "json, name=NotificationConfiguration" })
  notificationConfiguration?: NotificationConfiguration;

  @SpeakeasyMetadata({ data: "json, name=WorkteamName" })
  workteamName: string;
}
