import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostWalletAccountIdContractPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostWalletAccountIdContractRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostWalletAccountIdContractPathParams;
}


export class PostWalletAccountIdContractResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
