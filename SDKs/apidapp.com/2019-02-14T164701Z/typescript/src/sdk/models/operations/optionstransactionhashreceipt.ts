import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionsTransactionHashReceiptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hash" })
  hash: string;
}


export class OptionsTransactionHashReceiptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptionsTransactionHashReceiptPathParams;
}


export class OptionsTransactionHashReceiptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
