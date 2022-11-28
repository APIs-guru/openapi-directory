import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListEnvironmentSecretsPathParams extends SpeakeasyBase {
    environmentName: string;
    repositoryId: number;
}
export declare class ActionsListEnvironmentSecretsQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActionsListEnvironmentSecrets200ApplicationJson extends SpeakeasyBase {
    secrets: shared.ActionsSecret[];
    totalCount: number;
}
export declare class ActionsListEnvironmentSecretsRequest extends SpeakeasyBase {
    pathParams: ActionsListEnvironmentSecretsPathParams;
    queryParams: ActionsListEnvironmentSecretsQueryParams;
}
export declare class ActionsListEnvironmentSecretsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    actionsListEnvironmentSecrets200ApplicationJsonObject?: ActionsListEnvironmentSecrets200ApplicationJson;
}
