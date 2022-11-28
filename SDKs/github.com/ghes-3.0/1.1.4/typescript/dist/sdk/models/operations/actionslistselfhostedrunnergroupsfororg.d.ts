import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListSelfHostedRunnerGroupsForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ActionsListSelfHostedRunnerGroupsForOrgQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson extends SpeakeasyBase {
    runnerGroups: shared.RunnerGroupsOrg[];
    totalCount: number;
}
export declare class ActionsListSelfHostedRunnerGroupsForOrgRequest extends SpeakeasyBase {
    pathParams: ActionsListSelfHostedRunnerGroupsForOrgPathParams;
    queryParams: ActionsListSelfHostedRunnerGroupsForOrgQueryParams;
}
export declare class ActionsListSelfHostedRunnerGroupsForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    actionsListSelfHostedRunnerGroupsForOrg200ApplicationJsonObject?: ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJson;
}
