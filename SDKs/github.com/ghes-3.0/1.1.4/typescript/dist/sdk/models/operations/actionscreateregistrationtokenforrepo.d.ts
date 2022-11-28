import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsCreateRegistrationTokenForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsCreateRegistrationTokenForRepoRequest extends SpeakeasyBase {
    pathParams: ActionsCreateRegistrationTokenForRepoPathParams;
}
export declare class ActionsCreateRegistrationTokenForRepoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    authenticationToken?: shared.AuthenticationToken;
}
