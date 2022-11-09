import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV1PaymentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1PaymentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1PaymentsIdPathParams;
}


export class GetV1PaymentsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  paymentDto?: shared.PaymentDto;

  @Metadata()
  statusCode: number;
}
