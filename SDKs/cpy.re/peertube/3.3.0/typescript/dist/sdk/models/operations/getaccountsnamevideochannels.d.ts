import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAccountsNameVideoChannelsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class GetAccountsNameVideoChannelsQueryParams extends SpeakeasyBase {
    count?: number;
    sort?: string;
    start?: number;
    withStats?: boolean;
}
export declare class GetAccountsNameVideoChannelsRequest extends SpeakeasyBase {
    pathParams: GetAccountsNameVideoChannelsPathParams;
    queryParams: GetAccountsNameVideoChannelsQueryParams;
}
export declare class GetAccountsNameVideoChannelsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    videoChannelList?: any;
}
