import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteRepositoryPipelineKeyPairPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class DeleteRepositoryPipelineKeyPairRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteRepositoryPipelineKeyPairPathParams;
}


export class DeleteRepositoryPipelineKeyPairResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;
}
