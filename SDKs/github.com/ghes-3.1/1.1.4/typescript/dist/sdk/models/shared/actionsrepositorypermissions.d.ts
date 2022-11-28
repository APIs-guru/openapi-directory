import { SpeakeasyBase } from "../../../internal/utils";
import { AllowedActionsEnum } from "./allowedactionsenum";
export declare class ActionsRepositoryPermissions extends SpeakeasyBase {
    allowedActions: AllowedActionsEnum;
    enabled: boolean;
    selectedActionsUrl?: string;
}
