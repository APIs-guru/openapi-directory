import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSyndicatedVideosFormatEnum {
    Xml = "xml",
    Rss = "rss",
    Rss2 = "rss2",
    Atom = "atom",
    Atom1 = "atom1",
    Json = "json",
    Json1 = "json1"
}
export declare class GetSyndicatedVideosPathParams extends SpeakeasyBase {
    format: GetSyndicatedVideosFormatEnum;
}
export declare class GetSyndicatedVideosQueryParams extends SpeakeasyBase {
    accountId?: string;
    accountName?: string;
    filter?: shared.FilterEnum;
    nsfw?: shared.NsfwEnum;
    sort?: string;
    videoChannelId?: string;
    videoChannelName?: string;
}
export declare class GetSyndicatedVideosRequest extends SpeakeasyBase {
    pathParams: GetSyndicatedVideosPathParams;
    queryParams: GetSyndicatedVideosQueryParams;
}
export declare class GetSyndicatedVideosResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getSyndicatedVideos204ApplicationJsonObject?: Map<string, any>;
}
