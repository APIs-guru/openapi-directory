import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetAllowedActionsRepositoryPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsGetAllowedActionsRepositoryRequest extends SpeakeasyBase {
    pathParams: ActionsGetAllowedActionsRepositoryPathParams;
}
export declare class ActionsGetAllowedActionsRepositoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    selectedActions?: shared.SelectedActions;
}
