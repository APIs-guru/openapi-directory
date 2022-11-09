import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsSetGithubActionsPermissionsOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsSetGithubActionsPermissionsOrganizationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_actions" })
  allowedActions?: shared.AllowedActionsEnum;

  @Metadata({ data: "json, name=enabled_repositories" })
  enabledRepositories: shared.EnabledRepositoriesEnum;
}


export class ActionsSetGithubActionsPermissionsOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsSetGithubActionsPermissionsOrganizationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActionsSetGithubActionsPermissionsOrganizationRequestBody;
}


export class ActionsSetGithubActionsPermissionsOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
