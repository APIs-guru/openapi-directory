import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AllowedActionsEnum } from "./allowedactionsenum";
import { EnabledRepositoriesEnum } from "./enabledrepositoriesenum";


export class ActionsOrganizationPermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_actions" })
  allowedActions?: AllowedActionsEnum;

  @Metadata({ data: "json, name=enabled_repositories" })
  enabledRepositories: EnabledRepositoriesEnum;

  @Metadata({ data: "json, name=selected_actions_url" })
  selectedActionsUrl?: string;

  @Metadata({ data: "json, name=selected_repositories_url" })
  selectedRepositoriesUrl?: string;
}
