import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ActionsRemoveSelectedRepoFromOrgSecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsRemoveSelectedRepoFromOrgSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsRemoveSelectedRepoFromOrgSecretPathParams;
}


export class ActionsRemoveSelectedRepoFromOrgSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
