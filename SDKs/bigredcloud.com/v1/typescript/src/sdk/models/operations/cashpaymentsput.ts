import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CashPaymentsPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CashPaymentsPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CashPaymentsPutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CashPaymentDto;
}


export class CashPaymentsPutResponse extends SpeakeasyBase {
  @Metadata()
  cashPaymentsPut200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
