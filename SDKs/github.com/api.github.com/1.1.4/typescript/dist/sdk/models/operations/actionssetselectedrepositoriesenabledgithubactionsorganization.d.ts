import { SpeakeasyBase } from "../../../internal/utils";
export declare class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams extends SpeakeasyBase {
    org: string;
}
export declare class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody extends SpeakeasyBase {
    selectedRepositoryIds: number[];
}
export declare class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest extends SpeakeasyBase {
    pathParams: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams;
    request?: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody;
}
export declare class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
