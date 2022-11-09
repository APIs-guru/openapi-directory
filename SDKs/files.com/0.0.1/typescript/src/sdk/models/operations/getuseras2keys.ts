import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserAs2KeysQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=user_id" })
  userId?: number;
}


export class GetUserAs2KeysRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserAs2KeysQueryParams;
}


export class GetUserAs2KeysResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.As2KeyEntity })
  as2KeyEntities?: shared.As2KeyEntity[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
