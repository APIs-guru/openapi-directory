import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVideoChannelPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channelHandle" })
  channelHandle: string;
}


export class GetVideoChannelRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoChannelPathParams;
}


export class GetVideoChannelResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoChannel?: any;
}
