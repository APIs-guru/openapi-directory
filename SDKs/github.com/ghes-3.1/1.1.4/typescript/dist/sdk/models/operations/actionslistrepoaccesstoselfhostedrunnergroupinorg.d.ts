import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams extends SpeakeasyBase {
    org: string;
    runnerGroupId: number;
}
export declare class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson extends SpeakeasyBase {
    repositories: shared.Repository[];
    totalCount: number;
}
export declare class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest extends SpeakeasyBase {
    pathParams: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams;
    queryParams: ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams;
}
export declare class ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJsonObject?: ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJson;
}
