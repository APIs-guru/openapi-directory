import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRawEpisodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawEpisodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRawEpisodePathParams;
}


export class GetRawEpisodeResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  nitro?: any;
}
