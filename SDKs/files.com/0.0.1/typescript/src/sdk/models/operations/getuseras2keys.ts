import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserAs2KeysQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetUserAs2KeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserAs2KeysQueryParams;
}


export class GetUserAs2KeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.As2KeyEntity })
  as2KeyEntities?: shared.As2KeyEntity[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
