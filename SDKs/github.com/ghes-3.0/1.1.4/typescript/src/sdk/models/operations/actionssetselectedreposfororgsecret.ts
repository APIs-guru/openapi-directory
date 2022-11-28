import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsSetSelectedReposForOrgSecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsSetSelectedReposForOrgSecretRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selected_repository_ids" })
  selectedRepositoryIds?: number[];
}


export class ActionsSetSelectedReposForOrgSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsSetSelectedReposForOrgSecretPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: ActionsSetSelectedReposForOrgSecretRequestBody;
}


export class ActionsSetSelectedReposForOrgSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
