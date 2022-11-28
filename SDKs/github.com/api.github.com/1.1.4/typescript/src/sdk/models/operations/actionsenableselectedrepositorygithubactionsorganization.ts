import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsEnableSelectedRepositoryGithubActionsOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;
}


export class ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsEnableSelectedRepositoryGithubActionsOrganizationPathParams;
}


export class ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
