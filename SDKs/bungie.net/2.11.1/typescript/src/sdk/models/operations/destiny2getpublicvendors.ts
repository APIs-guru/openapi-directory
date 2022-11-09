import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Destiny2GetPublicVendorsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=components" })
  components?: number[];
}


export class Destiny2GetPublicVendorsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: Destiny2GetPublicVendorsQueryParams;
}


export class Destiny2GetPublicVendorsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
