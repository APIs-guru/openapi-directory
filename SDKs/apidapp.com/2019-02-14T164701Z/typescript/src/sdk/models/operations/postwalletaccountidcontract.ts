import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostWalletAccountIdContractPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostWalletAccountIdContractRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostWalletAccountIdContractPathParams;
}


export class PostWalletAccountIdContractResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
