import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV1CashPaymentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1CashPaymentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1CashPaymentsIdPathParams;
}


export class GetV1CashPaymentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  cashPaymentDto?: shared.CashPaymentDto;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
