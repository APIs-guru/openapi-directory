import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRawImagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRawImagePathParams;
}


export class GetRawImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nitro?: any;
}
