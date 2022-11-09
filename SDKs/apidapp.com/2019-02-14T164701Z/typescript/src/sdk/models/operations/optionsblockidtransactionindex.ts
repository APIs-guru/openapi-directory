import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptionsBlockIdTransactionIndexPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=index" })
  index: string;
}


export class OptionsBlockIdTransactionIndexRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OptionsBlockIdTransactionIndexPathParams;
}


export class OptionsBlockIdTransactionIndexResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
