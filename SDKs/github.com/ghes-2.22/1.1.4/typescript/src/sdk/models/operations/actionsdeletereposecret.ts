import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ActionsDeleteRepoSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsDeleteRepoSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsDeleteRepoSecretPathParams;
}


export class ActionsDeleteRepoSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
