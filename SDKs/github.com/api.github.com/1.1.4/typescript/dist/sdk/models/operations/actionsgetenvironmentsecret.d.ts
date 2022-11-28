import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsGetEnvironmentSecretPathParams extends SpeakeasyBase {
    environmentName: string;
    repositoryId: number;
    secretName: string;
}
export declare class ActionsGetEnvironmentSecretRequest extends SpeakeasyBase {
    pathParams: ActionsGetEnvironmentSecretPathParams;
}
export declare class ActionsGetEnvironmentSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsSecret?: shared.ActionsSecret;
}
