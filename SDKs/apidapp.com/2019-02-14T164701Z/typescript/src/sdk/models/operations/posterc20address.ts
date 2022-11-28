import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostErc20AddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class PostErc20AddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostErc20AddressPathParams;
}


export class PostErc20AddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
