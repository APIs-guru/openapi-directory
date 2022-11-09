import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsSetGithubActionsPermissionsRepositoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsSetGithubActionsPermissionsRepositoryRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_actions" })
  allowedActions?: shared.AllowedActionsEnum;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;
}


export class ActionsSetGithubActionsPermissionsRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsSetGithubActionsPermissionsRepositoryPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActionsSetGithubActionsPermissionsRepositoryRequestBody;
}


export class ActionsSetGithubActionsPermissionsRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
