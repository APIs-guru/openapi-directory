import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRawImagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawImageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRawImagePathParams;
}


export class GetRawImageResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  nitro?: any;
}
