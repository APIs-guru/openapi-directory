import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2GetPublicVendorsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=components" })
  components?: number[];
}


export class Destiny2GetPublicVendorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: Destiny2GetPublicVendorsQueryParams;
}


export class Destiny2GetPublicVendorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
