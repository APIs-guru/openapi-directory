import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptionsTransactionHashPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=hash" })
  hash: string;
}


export class OptionsTransactionHashRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OptionsTransactionHashPathParams;
}


export class OptionsTransactionHashResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
