import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetEnvironmentsForRepositoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetEnvironmentsForRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEnvironmentsForRepositoryPathParams;
}


export class GetEnvironmentsForRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  paginatedEnvironments?: shared.PaginatedEnvironments;
}
