import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUsersUserIdAs2KeysPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class GetUsersUserIdAs2KeysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetUsersUserIdAs2KeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUsersUserIdAs2KeysPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUsersUserIdAs2KeysQueryParams;
}


export class GetUsersUserIdAs2KeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.As2KeyEntity })
  as2KeyEntities?: shared.As2KeyEntity[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
