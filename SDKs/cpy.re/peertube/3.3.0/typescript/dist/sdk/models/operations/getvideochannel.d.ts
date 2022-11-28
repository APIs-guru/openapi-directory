import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVideoChannelPathParams extends SpeakeasyBase {
    channelHandle: string;
}
export declare class GetVideoChannelRequest extends SpeakeasyBase {
    pathParams: GetVideoChannelPathParams;
}
export declare class GetVideoChannelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoChannel?: any;
}
