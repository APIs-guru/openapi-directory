import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CashReceiptsPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CashReceiptsPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CashReceiptsPutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CashReceiptDto;
}


export class CashReceiptsPutResponse extends SpeakeasyBase {
  @Metadata()
  cashReceiptsPut200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
