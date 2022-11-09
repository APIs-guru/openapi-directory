import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV1CashReceiptsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetV1CashReceiptsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV1CashReceiptsIdPathParams;
}


export class GetV1CashReceiptsIdResponse extends SpeakeasyBase {
  @Metadata()
  cashReceiptDto?: shared.CashReceiptDto;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
