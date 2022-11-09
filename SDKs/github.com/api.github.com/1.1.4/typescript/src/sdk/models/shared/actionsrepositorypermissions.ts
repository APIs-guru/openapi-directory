import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AllowedActionsEnum } from "./allowedactionsenum";


export class ActionsRepositoryPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_actions" })
  allowedActions: AllowedActionsEnum;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=selected_actions_url" })
  selectedActionsUrl?: string;
}
