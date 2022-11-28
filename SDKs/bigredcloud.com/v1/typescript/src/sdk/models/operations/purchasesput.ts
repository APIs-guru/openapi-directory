import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PurchasesPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PurchasesPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PurchasesPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.PurchaseDto;
}


export class PurchasesPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  purchasesPut200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
