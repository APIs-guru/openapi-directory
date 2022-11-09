import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPaymentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetPaymentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPaymentsQueryParams;
}


export class GetPaymentsResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AccountLineItemEntity })
  accountLineItemEntities?: shared.AccountLineItemEntity[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
