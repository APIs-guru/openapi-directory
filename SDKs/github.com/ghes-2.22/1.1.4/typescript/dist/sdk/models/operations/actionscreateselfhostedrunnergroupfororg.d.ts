import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActionsCreateSelfHostedRunnerGroupForOrgPathParams extends SpeakeasyBase {
    org: string;
}
export declare enum ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum {
    Selected = "selected",
    All = "all",
    Private = "private"
}
export declare class ActionsCreateSelfHostedRunnerGroupForOrgRequestBody extends SpeakeasyBase {
    name: string;
    runners?: number[];
    selectedRepositoryIds?: number[];
    visibility?: ActionsCreateSelfHostedRunnerGroupForOrgRequestBodyVisibilityEnum;
}
export declare class ActionsCreateSelfHostedRunnerGroupForOrgRequest extends SpeakeasyBase {
    pathParams: ActionsCreateSelfHostedRunnerGroupForOrgPathParams;
    request?: ActionsCreateSelfHostedRunnerGroupForOrgRequestBody;
}
export declare class ActionsCreateSelfHostedRunnerGroupForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    runnerGroupsOrg?: shared.RunnerGroupsOrg;
}
