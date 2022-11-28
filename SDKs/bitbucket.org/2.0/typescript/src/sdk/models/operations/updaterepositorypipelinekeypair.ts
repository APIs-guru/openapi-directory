import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRepositoryPipelineKeyPairPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class UpdateRepositoryPipelineKeyPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateRepositoryPipelineKeyPairPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class UpdateRepositoryPipelineKeyPairResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  pipelineSshKeyPair?: Map<string, any>;
}
