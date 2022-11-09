import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTransactionHashReceiptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=hash" })
  hash: string;
}


export class GetTransactionHashReceiptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key2: shared.SchemeKey2;
}


export class GetTransactionHashReceiptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTransactionHashReceiptPathParams;

  @Metadata()
  security: GetTransactionHashReceiptSecurity;
}


export class GetTransactionHashReceiptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
