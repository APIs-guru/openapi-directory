import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsGetAllowedActionsRepositoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsGetAllowedActionsRepositoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsGetAllowedActionsRepositoryPathParams;
}


export class ActionsGetAllowedActionsRepositoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  selectedActions?: shared.SelectedActions;
}
