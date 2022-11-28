import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsSetAllowedActionsRepositoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsSetAllowedActionsRepositoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsSetAllowedActionsRepositoryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.SelectedActions;
}


export class ActionsSetAllowedActionsRepositoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
