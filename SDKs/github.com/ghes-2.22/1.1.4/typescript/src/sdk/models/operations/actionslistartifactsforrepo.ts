import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsListArtifactsForRepoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsListArtifactsForRepoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class ActionsListArtifactsForRepoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsListArtifactsForRepoPathParams;

  @Metadata()
  queryParams: ActionsListArtifactsForRepoQueryParams;
}


export class ActionsListArtifactsForRepo200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=artifacts", elemType: shared.Artifact })
  artifacts: shared.Artifact[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class ActionsListArtifactsForRepoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsListArtifactsForRepo200ApplicationJsonObject?: ActionsListArtifactsForRepo200ApplicationJson;
}
