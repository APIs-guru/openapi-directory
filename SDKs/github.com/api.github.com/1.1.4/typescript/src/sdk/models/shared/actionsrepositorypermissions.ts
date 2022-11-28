import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowedActionsEnum } from "./allowedactionsenum";



export class ActionsRepositoryPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_actions" })
  allowedActions: AllowedActionsEnum;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=selected_actions_url" })
  selectedActionsUrl?: string;
}
