import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowedActionsEnum } from "./allowedactionsenum";
import { EnabledRepositoriesEnum } from "./enabledrepositoriesenum";



export class ActionsOrganizationPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_actions" })
  allowedActions: AllowedActionsEnum;

  @SpeakeasyMetadata({ data: "json, name=enabled_repositories" })
  enabledRepositories: EnabledRepositoriesEnum;

  @SpeakeasyMetadata({ data: "json, name=selected_actions_url" })
  selectedActionsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=selected_repositories_url" })
  selectedRepositoriesUrl?: string;
}
