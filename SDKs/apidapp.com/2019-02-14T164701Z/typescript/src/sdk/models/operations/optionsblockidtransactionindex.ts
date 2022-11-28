import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionsBlockIdTransactionIndexPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: string;
}


export class OptionsBlockIdTransactionIndexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptionsBlockIdTransactionIndexPathParams;
}


export class OptionsBlockIdTransactionIndexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
