import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserPublicKeysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetUserPublicKeysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserPublicKeysQueryParams;
}


export class GetUserPublicKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PublicKeyEntity })
  publicKeyEntities?: shared.PublicKeyEntity[];

  @Metadata()
  statusCode: number;
}
