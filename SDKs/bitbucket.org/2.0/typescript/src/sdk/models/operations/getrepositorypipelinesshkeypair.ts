import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRepositoryPipelineSshKeyPairPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetRepositoryPipelineSshKeyPairRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRepositoryPipelineSshKeyPairPathParams;
}


export class GetRepositoryPipelineSshKeyPairResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  pipelineSshKeyPair?: Map<string, any>;
}
