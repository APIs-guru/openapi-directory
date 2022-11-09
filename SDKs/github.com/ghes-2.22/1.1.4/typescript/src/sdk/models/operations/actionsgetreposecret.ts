import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetRepoSecretPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsGetRepoSecretRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetRepoSecretPathParams;
}


export class ActionsGetRepoSecretResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsSecret?: shared.ActionsSecret;
}
