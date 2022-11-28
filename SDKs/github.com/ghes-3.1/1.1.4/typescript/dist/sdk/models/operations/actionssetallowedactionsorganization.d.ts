import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsSetAllowedActionsOrganizationPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ActionsSetAllowedActionsOrganizationRequest extends SpeakeasyBase {
    pathParams: ActionsSetAllowedActionsOrganizationPathParams;
    request?: shared.SelectedActions;
}
export declare class ActionsSetAllowedActionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
