import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;
}


export class ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams;
}


export class ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
