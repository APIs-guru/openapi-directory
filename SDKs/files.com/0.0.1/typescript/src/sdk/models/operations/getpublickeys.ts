import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPublicKeysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetPublicKeysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPublicKeysQueryParams;
}


export class GetPublicKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.PublicKeyEntity })
  publicKeyEntities?: shared.PublicKeyEntity[];

  @Metadata()
  statusCode: number;
}
