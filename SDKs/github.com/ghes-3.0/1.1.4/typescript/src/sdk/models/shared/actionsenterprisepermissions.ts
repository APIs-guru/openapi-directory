import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AllowedActionsEnum } from "./allowedactionsenum";
import { EnabledOrganizationsEnum } from "./enabledorganizationsenum";


export class ActionsEnterprisePermissions extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_actions" })
  allowedActions: AllowedActionsEnum;

  @Metadata({ data: "json, name=enabled_organizations" })
  enabledOrganizations: EnabledOrganizationsEnum;

  @Metadata({ data: "json, name=selected_actions_url" })
  selectedActionsUrl?: string;

  @Metadata({ data: "json, name=selected_organizations_url" })
  selectedOrganizationsUrl?: string;
}
