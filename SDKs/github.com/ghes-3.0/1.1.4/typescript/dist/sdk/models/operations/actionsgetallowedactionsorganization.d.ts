import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetAllowedActionsOrganizationPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ActionsGetAllowedActionsOrganizationRequest extends SpeakeasyBase {
    pathParams: ActionsGetAllowedActionsOrganizationPathParams;
}
export declare class ActionsGetAllowedActionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    selectedActions?: shared.SelectedActions;
}
