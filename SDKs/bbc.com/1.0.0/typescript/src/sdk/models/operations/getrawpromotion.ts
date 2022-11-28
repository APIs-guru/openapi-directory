import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRawPromotionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawPromotionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRawPromotionPathParams;
}


export class GetRawPromotionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nitro?: any;
}
