import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsRemoveSelectedRepoFromOrgSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsRemoveSelectedRepoFromOrgSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsRemoveSelectedRepoFromOrgSecretPathParams;
}


export class ActionsRemoveSelectedRepoFromOrgSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
