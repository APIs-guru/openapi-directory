import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListSelfHostedRunnersForRepoPathParams extends SpeakeasyBase {
    owner: string;
    repo: string;
}
export declare class ActionsListSelfHostedRunnersForRepoQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActionsListSelfHostedRunnersForRepo200ApplicationJson extends SpeakeasyBase {
    runners: shared.RunnerNoLabels[];
    totalCount: number;
}
export declare class ActionsListSelfHostedRunnersForRepoRequest extends SpeakeasyBase {
    pathParams: ActionsListSelfHostedRunnersForRepoPathParams;
    queryParams: ActionsListSelfHostedRunnersForRepoQueryParams;
}
export declare class ActionsListSelfHostedRunnersForRepoResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    actionsListSelfHostedRunnersForRepo200ApplicationJsonObject?: ActionsListSelfHostedRunnersForRepo200ApplicationJson;
}
