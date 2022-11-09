import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostErc20AddressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class PostErc20AddressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostErc20AddressPathParams;
}


export class PostErc20AddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
