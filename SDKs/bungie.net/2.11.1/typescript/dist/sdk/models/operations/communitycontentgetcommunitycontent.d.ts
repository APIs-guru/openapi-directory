import { SpeakeasyBase } from "../../../internal/utils";
export declare class CommunityContentGetCommunityContentPathParams extends SpeakeasyBase {
    mediaFilter: number;
    page: number;
    sort: number;
}
export declare class CommunityContentGetCommunityContentRequest extends SpeakeasyBase {
    pathParams: CommunityContentGetCommunityContentPathParams;
}
export declare class CommunityContentGetCommunityContentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
