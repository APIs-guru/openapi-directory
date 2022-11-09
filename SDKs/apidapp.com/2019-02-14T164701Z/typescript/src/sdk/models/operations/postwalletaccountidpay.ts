import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostWalletAccountIdPayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostWalletAccountIdPayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWalletAccountIdPayPathParams;
}


export class PostWalletAccountIdPayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
