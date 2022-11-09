import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PurchasesPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PurchasesPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PurchasesPutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PurchaseDto;
}


export class PurchasesPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  purchasesPut200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
