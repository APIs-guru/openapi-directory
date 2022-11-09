import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsSetSelectedReposForOrgSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsSetSelectedReposForOrgSecretRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=selected_repository_ids" })
  selectedRepositoryIds?: number[];
}


export class ActionsSetSelectedReposForOrgSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsSetSelectedReposForOrgSecretPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: ActionsSetSelectedReposForOrgSecretRequestBody;
}


export class ActionsSetSelectedReposForOrgSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
