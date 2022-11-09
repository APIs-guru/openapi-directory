import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetInvoicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetInvoicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetInvoicesQueryParams;
}


export class GetInvoicesResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AccountLineItemEntity })
  accountLineItemEntities?: shared.AccountLineItemEntity[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
