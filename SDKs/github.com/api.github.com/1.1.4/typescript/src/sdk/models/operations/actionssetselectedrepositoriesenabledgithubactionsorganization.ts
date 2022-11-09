import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=selected_repository_ids" })
  selectedRepositoryIds: number[];
}


export class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody;
}


export class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
