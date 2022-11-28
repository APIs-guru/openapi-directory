import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson extends SpeakeasyBase {
    repositories: shared.Repository[];
    totalCount: number;
}
export declare class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationRequest extends SpeakeasyBase {
    pathParams: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationPathParams;
    queryParams: ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationQueryParams;
}
export declare class ActionsListSelectedRepositoriesEnabledGithubActionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJsonObject?: ActionsListSelectedRepositoriesEnabledGithubActionsOrganization200ApplicationJson;
}
