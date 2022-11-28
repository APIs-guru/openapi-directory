import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV1PurchasesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1PurchasesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1PurchasesIdPathParams;
}


export class GetV1PurchasesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  purchaseDto?: shared.PurchaseDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
