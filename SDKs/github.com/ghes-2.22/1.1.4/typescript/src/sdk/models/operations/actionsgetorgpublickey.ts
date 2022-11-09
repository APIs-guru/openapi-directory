import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetOrgPublicKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsGetOrgPublicKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetOrgPublicKeyPathParams;
}


export class ActionsGetOrgPublicKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsPublicKey?: shared.ActionsPublicKey;
}
