import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedActionsEnum } from "./allowedactionsenum";
import { EnabledRepositoriesEnum } from "./enabledrepositoriesenum";
export declare class ActionsOrganizationPermissions extends SpeakeasyBase {
    allowedActions: AllowedActionsEnum;
    enabledRepositories: EnabledRepositoriesEnum;
    selectedActionsUrl?: string;
    selectedRepositoriesUrl?: string;
}
