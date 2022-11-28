import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InteractionsSetRestrictionsForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class InteractionsSetRestrictionsForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InteractionsSetRestrictionsForRepoPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.InteractionLimit;
}


export class InteractionsSetRestrictionsForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  interactionLimitResponse?: shared.InteractionLimitResponse;
}
