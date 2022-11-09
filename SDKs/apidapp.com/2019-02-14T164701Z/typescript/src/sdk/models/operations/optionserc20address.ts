import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OptionsErc20AddressPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class OptionsErc20AddressRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: OptionsErc20AddressPathParams;
}


export class OptionsErc20AddressResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  empty?: Map<string, any>;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;
}
