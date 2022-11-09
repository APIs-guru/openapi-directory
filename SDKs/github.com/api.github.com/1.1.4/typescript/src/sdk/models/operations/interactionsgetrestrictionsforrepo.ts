import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class InteractionsGetRestrictionsForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class InteractionsGetRestrictionsForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InteractionsGetRestrictionsForRepoPathParams;
}


export class InteractionsGetRestrictionsForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  interactionLimitResponse?: shared.InteractionLimitResponse;
}
