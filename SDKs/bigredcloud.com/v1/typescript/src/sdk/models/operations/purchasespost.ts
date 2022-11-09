import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PurchasesPostRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PurchaseDto;
}


export class PurchasesPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  purchasesPost200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
