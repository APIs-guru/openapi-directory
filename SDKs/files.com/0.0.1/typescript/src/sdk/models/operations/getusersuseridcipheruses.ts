import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersUserIdCipherUsesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class GetUsersUserIdCipherUsesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetUsersUserIdCipherUsesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersUserIdCipherUsesPathParams;

  @Metadata()
  queryParams: GetUsersUserIdCipherUsesQueryParams;
}


export class GetUsersUserIdCipherUsesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.UserCipherUseEntity })
  userCipherUseEntities?: shared.UserCipherUseEntity[];
}
