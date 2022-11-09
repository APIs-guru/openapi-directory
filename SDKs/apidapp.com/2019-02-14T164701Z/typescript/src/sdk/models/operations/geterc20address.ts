import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetErc20AddressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetErc20AddressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetErc20AddressPathParams;
}


export class GetErc20AddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
