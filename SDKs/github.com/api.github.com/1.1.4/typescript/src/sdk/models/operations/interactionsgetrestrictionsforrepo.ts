import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InteractionsGetRestrictionsForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class InteractionsGetRestrictionsForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InteractionsGetRestrictionsForRepoPathParams;
}


export class InteractionsGetRestrictionsForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  interactionLimitResponse?: shared.InteractionLimitResponse;
}
