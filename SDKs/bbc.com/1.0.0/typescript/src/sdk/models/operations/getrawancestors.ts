import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRawAncestorsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawAncestorsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRawAncestorsPathParams;
}


export class GetRawAncestorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nitro?: any;
}
