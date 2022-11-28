import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPublicKeysIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetPublicKeysIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPublicKeysIdPathParams;
}


export class GetPublicKeysIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  publicKeyEntity?: shared.PublicKeyEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
