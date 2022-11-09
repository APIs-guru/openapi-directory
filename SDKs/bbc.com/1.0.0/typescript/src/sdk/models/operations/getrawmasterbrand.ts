import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRawMasterbrandPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mbid" })
  mbid: string;
}


export class GetRawMasterbrandRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRawMasterbrandPathParams;
}


export class GetRawMasterbrandResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  nitro?: any;
}
