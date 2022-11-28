import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsGetOrgPublicKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=org" })
  org: string;
}


export class ActionsGetOrgPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsGetOrgPublicKeyPathParams;
}


export class ActionsGetOrgPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsPublicKey?: shared.ActionsPublicKey;
}
