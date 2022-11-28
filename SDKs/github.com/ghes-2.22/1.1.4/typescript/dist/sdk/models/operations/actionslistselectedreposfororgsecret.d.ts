import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListSelectedReposForOrgSecretPathParams extends SpeakeasyBase {
    org: string;
    secretName: string;
}
export declare class ActionsListSelectedReposForOrgSecretQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActionsListSelectedReposForOrgSecret200ApplicationJson extends SpeakeasyBase {
    repositories: shared.MinimalRepository[];
    totalCount: number;
}
export declare class ActionsListSelectedReposForOrgSecretRequest extends SpeakeasyBase {
    pathParams: ActionsListSelectedReposForOrgSecretPathParams;
    queryParams: ActionsListSelectedReposForOrgSecretQueryParams;
}
export declare class ActionsListSelectedReposForOrgSecretResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsListSelectedReposForOrgSecret200ApplicationJsonObject?: ActionsListSelectedReposForOrgSecret200ApplicationJson;
}
