import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetErc20AddressPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetErc20AddressRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetErc20AddressPathParams;
}


export class GetErc20AddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  empty?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
