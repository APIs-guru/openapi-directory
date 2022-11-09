import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetAllowedActionsRepositoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsGetAllowedActionsRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetAllowedActionsRepositoryPathParams;
}


export class ActionsGetAllowedActionsRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  selectedActions?: shared.SelectedActions;
}
