import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVideoChannelPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channelHandle" })
  channelHandle: string;
}


export class GetVideoChannelRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideoChannelPathParams;
}


export class GetVideoChannelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  videoChannel?: any;
}
