import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsSetGithubActionsPermissionsRepositoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsSetGithubActionsPermissionsRepositoryRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_actions" })
  allowedActions?: shared.AllowedActionsEnum;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;
}


export class ActionsSetGithubActionsPermissionsRepositoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsSetGithubActionsPermissionsRepositoryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActionsSetGithubActionsPermissionsRepositoryRequestBody;
}


export class ActionsSetGithubActionsPermissionsRepositoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
