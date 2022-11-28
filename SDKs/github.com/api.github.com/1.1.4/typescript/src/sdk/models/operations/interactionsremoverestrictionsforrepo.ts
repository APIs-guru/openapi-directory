import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InteractionsRemoveRestrictionsForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class InteractionsRemoveRestrictionsForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InteractionsRemoveRestrictionsForRepoPathParams;
}


export class InteractionsRemoveRestrictionsForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
