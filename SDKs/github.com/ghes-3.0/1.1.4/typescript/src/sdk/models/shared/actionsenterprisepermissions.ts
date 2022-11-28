import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AllowedActionsEnum } from "./allowedactionsenum";
import { EnabledOrganizationsEnum } from "./enabledorganizationsenum";



export class ActionsEnterprisePermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_actions" })
  allowedActions: AllowedActionsEnum;

  @SpeakeasyMetadata({ data: "json, name=enabled_organizations" })
  enabledOrganizations: EnabledOrganizationsEnum;

  @SpeakeasyMetadata({ data: "json, name=selected_actions_url" })
  selectedActionsUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=selected_organizations_url" })
  selectedOrganizationsUrl?: string;
}
