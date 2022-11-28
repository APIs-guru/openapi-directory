import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTransactionCostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetTransactionCostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransactionCostPathParams;
}


export class GetTransactionCostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
