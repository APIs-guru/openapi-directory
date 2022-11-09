import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetEnvironmentForRepositoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environment_uuid" })
  environmentUuid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo_slug" })
  repoSlug: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workspace" })
  workspace: string;
}


export class GetEnvironmentForRepositoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetEnvironmentForRepositoryPathParams;
}


export class GetEnvironmentForRepositoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deploymentEnvironment?: Map<string, any>;

  @Metadata()
  error?: Map<string, any>;
}
