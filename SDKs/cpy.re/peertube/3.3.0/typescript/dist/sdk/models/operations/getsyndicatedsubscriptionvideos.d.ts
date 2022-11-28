import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetSyndicatedSubscriptionVideosFormatEnum {
    Xml = "xml",
    Rss = "rss",
    Rss2 = "rss2",
    Atom = "atom",
    Atom1 = "atom1",
    Json = "json",
    Json1 = "json1"
}
export declare class GetSyndicatedSubscriptionVideosPathParams extends SpeakeasyBase {
    format: GetSyndicatedSubscriptionVideosFormatEnum;
}
export declare class GetSyndicatedSubscriptionVideosQueryParams extends SpeakeasyBase {
    accountId: string;
    filter?: shared.FilterEnum;
    nsfw?: shared.NsfwEnum;
    sort?: string;
    token: string;
}
export declare class GetSyndicatedSubscriptionVideosRequest extends SpeakeasyBase {
    pathParams: GetSyndicatedSubscriptionVideosPathParams;
    queryParams: GetSyndicatedSubscriptionVideosQueryParams;
}
export declare class GetSyndicatedSubscriptionVideosResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getSyndicatedSubscriptionVideos204ApplicationJsonObject?: Map<string, any>;
}
