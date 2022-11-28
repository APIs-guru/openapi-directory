import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionsBlockIdTransactionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OptionsBlockIdTransactionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptionsBlockIdTransactionPathParams;
}


export class OptionsBlockIdTransactionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
