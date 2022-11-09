import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetRepoPublicKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ActionsGetRepoPublicKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetRepoPublicKeyPathParams;
}


export class ActionsGetRepoPublicKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsPublicKey?: shared.ActionsPublicKey;
}
