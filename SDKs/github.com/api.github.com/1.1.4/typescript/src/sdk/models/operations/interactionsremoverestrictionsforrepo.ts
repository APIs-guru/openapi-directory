import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class InteractionsRemoveRestrictionsForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class InteractionsRemoveRestrictionsForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InteractionsRemoveRestrictionsForRepoPathParams;
}


export class InteractionsRemoveRestrictionsForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
