import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsSetAllowedActionsRepositoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsSetAllowedActionsRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsSetAllowedActionsRepositoryPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.SelectedActions;
}


export class ActionsSetAllowedActionsRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
