import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CashReceiptsPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CashReceiptsPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CashReceiptsPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CashReceiptDto;
}


export class CashReceiptsPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cashReceiptsPut200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
