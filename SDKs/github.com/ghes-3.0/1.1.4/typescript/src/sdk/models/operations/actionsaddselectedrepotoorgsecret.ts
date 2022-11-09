import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsAddSelectedRepoToOrgSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsAddSelectedRepoToOrgSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsAddSelectedRepoToOrgSecretPathParams;
}


export class ActionsAddSelectedRepoToOrgSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
