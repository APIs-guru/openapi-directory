import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRawMasterbrandPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mbid" })
  mbid: string;
}


export class GetRawMasterbrandRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRawMasterbrandPathParams;
}


export class GetRawMasterbrandResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nitro?: any;
}
