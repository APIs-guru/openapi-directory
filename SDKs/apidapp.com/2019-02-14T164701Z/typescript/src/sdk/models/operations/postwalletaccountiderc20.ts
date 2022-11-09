import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostWalletAccountIdErc20PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostWalletAccountIdErc20Request extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWalletAccountIdErc20PathParams;
}


export class PostWalletAccountIdErc20Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
