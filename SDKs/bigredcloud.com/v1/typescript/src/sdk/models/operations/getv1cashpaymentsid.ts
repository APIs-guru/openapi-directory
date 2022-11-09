import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV1CashPaymentsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1CashPaymentsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1CashPaymentsIdPathParams;
}


export class GetV1CashPaymentsIdResponse extends SpeakeasyBase {
  @Metadata()
  cashPaymentDto?: shared.CashPaymentDto;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
