import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsSetAllowedActionsOrganizationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsSetAllowedActionsOrganizationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsSetAllowedActionsOrganizationPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SelectedActions;
}


export class ActionsSetAllowedActionsOrganizationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
