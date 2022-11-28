import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTransactionHashReceiptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hash" })
  hash: string;
}


export class GetTransactionHashReceiptSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key2: shared.SchemeKey2;
}


export class GetTransactionHashReceiptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTransactionHashReceiptPathParams;

  @SpeakeasyMetadata()
  security: GetTransactionHashReceiptSecurity;
}


export class GetTransactionHashReceiptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
