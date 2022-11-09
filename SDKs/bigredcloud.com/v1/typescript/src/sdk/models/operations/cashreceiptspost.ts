import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CashReceiptsPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CashReceiptDto;
}


export class CashReceiptsPostResponse extends SpeakeasyBase {
  @Metadata()
  cashReceiptsPost200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
