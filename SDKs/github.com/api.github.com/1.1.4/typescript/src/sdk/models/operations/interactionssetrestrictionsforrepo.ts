import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InteractionsSetRestrictionsForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class InteractionsSetRestrictionsForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InteractionsSetRestrictionsForRepoPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.InteractionLimit;
}


export class InteractionsSetRestrictionsForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  interactionLimitResponse?: shared.InteractionLimitResponse;
}
