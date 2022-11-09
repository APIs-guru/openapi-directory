import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetGithubActionsPermissionsRepositoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsGetGithubActionsPermissionsRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetGithubActionsPermissionsRepositoryPathParams;
}


export class ActionsGetGithubActionsPermissionsRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsRepositoryPermissions?: shared.ActionsRepositoryPermissions;
}
