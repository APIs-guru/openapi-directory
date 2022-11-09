import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateRepositoryPipelineKeyPairPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class UpdateRepositoryPipelineKeyPairRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateRepositoryPipelineKeyPairPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class UpdateRepositoryPipelineKeyPairResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineSshKeyPair?: Map<string, any>;
}
