import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPaymentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetPaymentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPaymentsQueryParams;
}


export class GetPaymentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AccountLineItemEntity })
  accountLineItemEntities?: shared.AccountLineItemEntity[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
