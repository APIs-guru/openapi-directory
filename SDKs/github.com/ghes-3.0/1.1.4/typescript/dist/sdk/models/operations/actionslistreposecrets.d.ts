import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListRepoSecretsPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsListRepoSecretsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActionsListRepoSecrets200ApplicationJson extends SpeakeasyBase {
    secrets: shared.ActionsSecret[];
    totalCount: number;
}
export declare class ActionsListRepoSecretsRequest extends SpeakeasyBase {
    pathParams: ActionsListRepoSecretsPathParams;
    queryParams: ActionsListRepoSecretsQueryParams;
}
export declare class ActionsListRepoSecretsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    actionsListRepoSecrets200ApplicationJsonObject?: ActionsListRepoSecrets200ApplicationJson;
}
