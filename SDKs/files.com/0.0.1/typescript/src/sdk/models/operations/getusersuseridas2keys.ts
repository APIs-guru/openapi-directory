import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUsersUserIdAs2KeysPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class GetUsersUserIdAs2KeysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetUsersUserIdAs2KeysRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUsersUserIdAs2KeysPathParams;

  @Metadata()
  queryParams: GetUsersUserIdAs2KeysQueryParams;
}


export class GetUsersUserIdAs2KeysResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.As2KeyEntity })
  as2KeyEntities?: shared.As2KeyEntity[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
