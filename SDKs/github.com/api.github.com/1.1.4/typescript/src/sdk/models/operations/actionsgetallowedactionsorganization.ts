import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetAllowedActionsOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsGetAllowedActionsOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetAllowedActionsOrganizationPathParams;
}


export class ActionsGetAllowedActionsOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  selectedActions?: shared.SelectedActions;
}
