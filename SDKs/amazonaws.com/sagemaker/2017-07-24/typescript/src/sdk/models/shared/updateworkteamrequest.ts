import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MemberDefinition } from "./memberdefinition";
import { NotificationConfiguration } from "./notificationconfiguration";


export class UpdateWorkteamRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=MemberDefinitions", elemType: shared.MemberDefinition })
  memberDefinitions?: MemberDefinition[];

  @Metadata({ data: "json, name=NotificationConfiguration" })
  notificationConfiguration?: NotificationConfiguration;

  @Metadata({ data: "json, name=WorkteamName" })
  workteamName: string;
}
