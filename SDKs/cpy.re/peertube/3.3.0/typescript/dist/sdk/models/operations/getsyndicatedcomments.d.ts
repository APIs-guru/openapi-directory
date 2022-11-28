import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetSyndicatedCommentsFormatEnum {
    Xml = "xml",
    Rss = "rss",
    Rss2 = "rss2",
    Atom = "atom",
    Atom1 = "atom1",
    Json = "json",
    Json1 = "json1"
}
export declare class GetSyndicatedCommentsPathParams extends SpeakeasyBase {
    format: GetSyndicatedCommentsFormatEnum;
}
export declare class GetSyndicatedCommentsQueryParams extends SpeakeasyBase {
    accountId?: string;
    accountName?: string;
    videoChannelId?: string;
    videoChannelName?: string;
    videoId?: string;
}
export declare class GetSyndicatedCommentsRequest extends SpeakeasyBase {
    pathParams: GetSyndicatedCommentsPathParams;
    queryParams: GetSyndicatedCommentsQueryParams;
}
export declare class GetSyndicatedCommentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getSyndicatedComments204ApplicationJsonObject?: Map<string, any>;
}
