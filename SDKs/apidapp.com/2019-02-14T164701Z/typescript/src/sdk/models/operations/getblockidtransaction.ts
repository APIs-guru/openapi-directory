import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBlockIdTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetBlockIdTransactionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  key2: shared.SchemeKey2;
}


export class GetBlockIdTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBlockIdTransactionPathParams;

  @SpeakeasyMetadata()
  security: GetBlockIdTransactionSecurity;
}


export class GetBlockIdTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
