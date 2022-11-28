import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetRepoSecretPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    secretName: string;
}
export declare class ActionsGetRepoSecretRequest extends SpeakeasyBase {
    pathParams: ActionsGetRepoSecretPathParams;
}
export declare class ActionsGetRepoSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsSecret?: shared.ActionsSecret;
}
