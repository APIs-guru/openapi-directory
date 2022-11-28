import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVideoBlocksQueryParams extends SpeakeasyBase {
    count?: number;
    search?: string;
    sort?: shared.BlacklistsSortEnum;
    start?: number;
    type?: number;
}
export declare class GetVideoBlocksSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetVideoBlocks200ApplicationJson extends SpeakeasyBase {
    data?: any[];
    total?: number;
}
export declare class GetVideoBlocksRequest extends SpeakeasyBase {
    queryParams: GetVideoBlocksQueryParams;
    security: GetVideoBlocksSecurity;
}
export declare class GetVideoBlocksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getVideoBlocks200ApplicationJsonObject?: GetVideoBlocks200ApplicationJson;
}
