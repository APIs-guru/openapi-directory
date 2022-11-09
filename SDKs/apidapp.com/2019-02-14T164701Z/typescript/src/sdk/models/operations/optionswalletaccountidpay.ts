import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptionsWalletAccountIdPayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OptionsWalletAccountIdPayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OptionsWalletAccountIdPayPathParams;
}


export class OptionsWalletAccountIdPayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
