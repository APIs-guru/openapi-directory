import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRawBrandPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawBrandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRawBrandPathParams;
}


export class GetRawBrandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nitro?: any;
}
