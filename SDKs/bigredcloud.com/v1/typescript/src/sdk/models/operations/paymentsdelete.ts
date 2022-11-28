import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PaymentsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PaymentsDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timestamp" })
  timestamp: string;
}


export class PaymentsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PaymentsDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: PaymentsDeleteQueryParams;
}


export class PaymentsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentsDelete200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
