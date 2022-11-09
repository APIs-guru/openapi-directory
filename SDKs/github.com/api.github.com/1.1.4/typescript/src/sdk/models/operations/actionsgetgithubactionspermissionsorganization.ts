import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetGithubActionsPermissionsOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsGetGithubActionsPermissionsOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetGithubActionsPermissionsOrganizationPathParams;
}


export class ActionsGetGithubActionsPermissionsOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsOrganizationPermissions?: shared.ActionsOrganizationPermissions;
}
