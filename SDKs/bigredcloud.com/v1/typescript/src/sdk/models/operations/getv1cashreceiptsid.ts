import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV1CashReceiptsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1CashReceiptsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CashReceiptsIdPathParams;
}


export class GetV1CashReceiptsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cashReceiptDto?: shared.CashReceiptDto;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
