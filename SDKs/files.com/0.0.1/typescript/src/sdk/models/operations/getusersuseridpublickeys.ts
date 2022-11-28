import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersUserIdPublicKeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class GetUsersUserIdPublicKeysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetUsersUserIdPublicKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersUserIdPublicKeysPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersUserIdPublicKeysQueryParams;
}


export class GetUsersUserIdPublicKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PublicKeyEntity })
  publicKeyEntities?: shared.PublicKeyEntity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
