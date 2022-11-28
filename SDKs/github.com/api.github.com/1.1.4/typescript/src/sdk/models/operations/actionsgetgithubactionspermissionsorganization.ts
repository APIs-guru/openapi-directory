import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsGetGithubActionsPermissionsOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsGetGithubActionsPermissionsOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsGetGithubActionsPermissionsOrganizationPathParams;
}


export class ActionsGetGithubActionsPermissionsOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsOrganizationPermissions?: shared.ActionsOrganizationPermissions;
}
