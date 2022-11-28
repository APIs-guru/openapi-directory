import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRepositoryPipelineSshKeyPairPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoryPipelineSshKeyPairRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRepositoryPipelineSshKeyPairPathParams;
}


export class GetRepositoryPipelineSshKeyPairResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  pipelineSshKeyPair?: Map<string, any>;
}
