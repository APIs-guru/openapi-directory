import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptionsTransactionHashReceiptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=hash" })
  hash: string;
}


export class OptionsTransactionHashReceiptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OptionsTransactionHashReceiptPathParams;
}


export class OptionsTransactionHashReceiptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
