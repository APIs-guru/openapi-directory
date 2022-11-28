import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selected_repository_ids" })
  selectedRepositoryIds: number[];
}


export class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationRequestBody;
}


export class ActionsSetSelectedRepositoriesEnabledGithubActionsOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
