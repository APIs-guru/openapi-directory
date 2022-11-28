import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionsTransactionHashPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=hash" })
  hash: string;
}


export class OptionsTransactionHashRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptionsTransactionHashPathParams;
}


export class OptionsTransactionHashResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
