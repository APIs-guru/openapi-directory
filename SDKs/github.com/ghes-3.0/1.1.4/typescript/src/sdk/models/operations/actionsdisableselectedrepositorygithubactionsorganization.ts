import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;
}


export class ActionsDisableSelectedRepositoryGithubActionsOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsDisableSelectedRepositoryGithubActionsOrganizationPathParams;
}


export class ActionsDisableSelectedRepositoryGithubActionsOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
