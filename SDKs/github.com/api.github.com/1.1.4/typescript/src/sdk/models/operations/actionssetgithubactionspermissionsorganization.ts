import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsSetGithubActionsPermissionsOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsSetGithubActionsPermissionsOrganizationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_actions" })
  allowedActions?: shared.AllowedActionsEnum;

  @SpeakeasyMetadata({ data: "json, name=enabled_repositories" })
  enabledRepositories: shared.EnabledRepositoriesEnum;
}


export class ActionsSetGithubActionsPermissionsOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsSetGithubActionsPermissionsOrganizationPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActionsSetGithubActionsPermissionsOrganizationRequestBody;
}


export class ActionsSetGithubActionsPermissionsOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
