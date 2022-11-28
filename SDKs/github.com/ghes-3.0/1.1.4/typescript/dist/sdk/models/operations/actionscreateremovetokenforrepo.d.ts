import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsCreateRemoveTokenForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsCreateRemoveTokenForRepoRequest extends SpeakeasyBase {
    pathParams: ActionsCreateRemoveTokenForRepoPathParams;
}
export declare class ActionsCreateRemoveTokenForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationToken?: shared.AuthenticationToken;
}
