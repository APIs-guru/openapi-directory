import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsSetAllowedActionsRepositoryPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsSetAllowedActionsRepositoryRequest extends SpeakeasyBase {
    pathParams: ActionsSetAllowedActionsRepositoryPathParams;
    request?: shared.SelectedActions;
}
export declare class ActionsSetAllowedActionsRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
