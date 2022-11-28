import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedActionsEnum } from "./allowedactionsenum";
import { EnabledOrganizationsEnum } from "./enabledorganizationsenum";
export declare class ActionsEnterprisePermissions extends SpeakeasyBase {
    allowedActions: AllowedActionsEnum;
    enabledOrganizations: EnabledOrganizationsEnum;
    selectedActionsUrl?: string;
    selectedOrganizationsUrl?: string;
}
