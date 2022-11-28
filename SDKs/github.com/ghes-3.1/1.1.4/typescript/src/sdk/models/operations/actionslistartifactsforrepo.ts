import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsListArtifactsForRepoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsListArtifactsForRepoQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListArtifactsForRepo200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artifacts", elemType: shared.Artifact })
  artifacts: shared.Artifact[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListArtifactsForRepoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsListArtifactsForRepoPathParams;

  @SpeakeasyMetadata()
  queryParams: ActionsListArtifactsForRepoQueryParams;
}


export class ActionsListArtifactsForRepoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsListArtifactsForRepo200ApplicationJsonObject?: ActionsListArtifactsForRepo200ApplicationJson;
}
