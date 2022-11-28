import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostWalletAccountIdPayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostWalletAccountIdPayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostWalletAccountIdPayPathParams;
}


export class PostWalletAccountIdPayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
