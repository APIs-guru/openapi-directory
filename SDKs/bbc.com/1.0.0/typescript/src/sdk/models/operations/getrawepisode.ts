import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRawEpisodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawEpisodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRawEpisodePathParams;
}


export class GetRawEpisodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nitro?: any;
}
