import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsGetRepoSecretPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=secret_name" })
  secretName: string;
}


export class ActionsGetRepoSecretRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsGetRepoSecretPathParams;
}


export class ActionsGetRepoSecretResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsSecret?: shared.ActionsSecret;
}
