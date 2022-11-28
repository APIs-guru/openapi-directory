import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetVideoChannelsQueryParams extends SpeakeasyBase {
    count?: number;
    sort?: string;
    start?: number;
}
export declare class GetVideoChannelsRequest extends SpeakeasyBase {
    queryParams: GetVideoChannelsQueryParams;
}
export declare class GetVideoChannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoChannelList?: any;
}
