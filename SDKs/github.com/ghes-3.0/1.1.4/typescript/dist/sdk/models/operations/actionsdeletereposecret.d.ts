import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsDeleteRepoSecretPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
    secretName: string;
}
export declare class ActionsDeleteRepoSecretRequest extends SpeakeasyBase {
    pathParams: ActionsDeleteRepoSecretPathParams;
}
export declare class ActionsDeleteRepoSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
