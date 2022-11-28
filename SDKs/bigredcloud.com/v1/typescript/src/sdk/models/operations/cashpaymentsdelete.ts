import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CashPaymentsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CashPaymentsDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class CashPaymentsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CashPaymentsDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: CashPaymentsDeleteQueryParams;
}


export class CashPaymentsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cashPaymentsDelete200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
