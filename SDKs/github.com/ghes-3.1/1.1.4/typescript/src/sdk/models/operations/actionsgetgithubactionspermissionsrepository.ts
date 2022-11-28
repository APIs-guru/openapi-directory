import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsGetGithubActionsPermissionsRepositoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsGetGithubActionsPermissionsRepositoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsGetGithubActionsPermissionsRepositoryPathParams;
}


export class ActionsGetGithubActionsPermissionsRepositoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsRepositoryPermissions?: shared.ActionsRepositoryPermissions;
}
