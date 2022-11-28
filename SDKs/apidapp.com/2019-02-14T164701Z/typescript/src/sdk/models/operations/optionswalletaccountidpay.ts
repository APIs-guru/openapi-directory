import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionsWalletAccountIdPayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OptionsWalletAccountIdPayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptionsWalletAccountIdPayPathParams;
}


export class OptionsWalletAccountIdPayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
