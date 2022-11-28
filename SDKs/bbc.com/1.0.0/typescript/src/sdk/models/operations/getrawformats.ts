import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRawFormatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawFormatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRawFormatsPathParams;
}


export class GetRawFormatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nitro?: any;
}
