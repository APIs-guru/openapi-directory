import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsEnableSelectedRepositoryGithubActionsOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;
}


export class ActionsEnableSelectedRepositoryGithubActionsOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsEnableSelectedRepositoryGithubActionsOrganizationPathParams;
}


export class ActionsEnableSelectedRepositoryGithubActionsOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
