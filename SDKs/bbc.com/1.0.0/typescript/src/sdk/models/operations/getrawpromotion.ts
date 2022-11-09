import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRawPromotionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawPromotionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRawPromotionPathParams;
}


export class GetRawPromotionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  nitro?: any;
}
