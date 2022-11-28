import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OptionsWalletAccountIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OptionsWalletAccountIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OptionsWalletAccountIdPathParams;
}


export class OptionsWalletAccountIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;
}
