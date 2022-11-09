import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptionsBlockIdTransactionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OptionsBlockIdTransactionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OptionsBlockIdTransactionPathParams;
}


export class OptionsBlockIdTransactionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
