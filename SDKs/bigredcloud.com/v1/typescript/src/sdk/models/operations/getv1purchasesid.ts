import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV1PurchasesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1PurchasesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1PurchasesIdPathParams;
}


export class GetV1PurchasesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  purchaseDto?: shared.PurchaseDto;

  @Metadata()
  statusCode: number;
}
