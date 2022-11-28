import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsListSelfHostedRunnersForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ActionsListSelfHostedRunnersForOrgQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class ActionsListSelfHostedRunnersForOrg200ApplicationJson extends SpeakeasyBase {
    runners: shared.RunnerNoLabels[];
    totalCount: number;
}
export declare class ActionsListSelfHostedRunnersForOrgRequest extends SpeakeasyBase {
    pathParams: ActionsListSelfHostedRunnersForOrgPathParams;
    queryParams: ActionsListSelfHostedRunnersForOrgQueryParams;
}
export declare class ActionsListSelfHostedRunnersForOrgResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    actionsListSelfHostedRunnersForOrg200ApplicationJsonObject?: ActionsListSelfHostedRunnersForOrg200ApplicationJson;
}
