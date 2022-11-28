import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsGetAllowedActionsOrganizationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsGetAllowedActionsOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsGetAllowedActionsOrganizationPathParams;
}


export class ActionsGetAllowedActionsOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  selectedActions?: shared.SelectedActions;
}
