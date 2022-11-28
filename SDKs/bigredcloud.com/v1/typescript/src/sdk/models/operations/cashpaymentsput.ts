import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CashPaymentsPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CashPaymentsPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CashPaymentsPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CashPaymentDto;
}


export class CashPaymentsPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cashPaymentsPut200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
