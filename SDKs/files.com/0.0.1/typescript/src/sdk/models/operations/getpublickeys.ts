import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPublicKeysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetPublicKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPublicKeysQueryParams;
}


export class GetPublicKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PublicKeyEntity })
  publicKeyEntities?: shared.PublicKeyEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
