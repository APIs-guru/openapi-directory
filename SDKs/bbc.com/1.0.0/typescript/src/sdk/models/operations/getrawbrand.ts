import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRawBrandPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawBrandRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRawBrandPathParams;
}


export class GetRawBrandResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  nitro?: any;
}
