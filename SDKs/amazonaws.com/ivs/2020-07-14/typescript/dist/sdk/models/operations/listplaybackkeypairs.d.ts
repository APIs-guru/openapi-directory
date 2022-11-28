import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListPlaybackKeyPairsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListPlaybackKeyPairsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListPlaybackKeyPairsRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListPlaybackKeyPairsRequest extends SpeakeasyBase {
    queryParams: ListPlaybackKeyPairsQueryParams;
    headers: ListPlaybackKeyPairsHeaders;
    request: ListPlaybackKeyPairsRequestBody;
}
export declare class ListPlaybackKeyPairsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    listPlaybackKeyPairsResponse?: shared.ListPlaybackKeyPairsResponse;
    statusCode: number;
    validationException?: any;
}
