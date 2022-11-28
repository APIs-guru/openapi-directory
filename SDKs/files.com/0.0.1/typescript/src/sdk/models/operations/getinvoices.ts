import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetInvoicesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetInvoicesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetInvoicesQueryParams;
}


export class GetInvoicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AccountLineItemEntity })
  accountLineItemEntities?: shared.AccountLineItemEntity[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
