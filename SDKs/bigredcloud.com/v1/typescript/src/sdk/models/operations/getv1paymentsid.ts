import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV1PaymentsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1PaymentsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV1PaymentsIdPathParams;
}


export class GetV1PaymentsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  paymentDto?: shared.PaymentDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
