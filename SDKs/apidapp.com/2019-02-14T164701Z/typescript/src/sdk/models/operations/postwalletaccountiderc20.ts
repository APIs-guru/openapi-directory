import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostWalletAccountIdErc20PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostWalletAccountIdErc20Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostWalletAccountIdErc20PathParams;
}


export class PostWalletAccountIdErc20Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
