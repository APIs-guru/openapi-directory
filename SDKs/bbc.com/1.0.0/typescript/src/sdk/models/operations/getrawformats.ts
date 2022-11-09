import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRawFormatsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawFormatsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRawFormatsPathParams;
}


export class GetRawFormatsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  nitro?: any;
}
