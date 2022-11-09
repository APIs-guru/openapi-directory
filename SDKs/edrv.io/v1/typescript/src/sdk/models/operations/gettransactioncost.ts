import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTransactionCostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTransactionCostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionCostPathParams;
}


export class GetTransactionCostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
