import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGameMediaQueryParams extends SpeakeasyBase {
    conference?: string;
    mediaType?: string;
    seasonType?: string;
    team?: string;
    week?: number;
    year: number;
}
export declare class GetGameMediaRequest extends SpeakeasyBase {
    queryParams: GetGameMediaQueryParams;
}
export declare class GetGameMediaResponse extends SpeakeasyBase {
    contentType: string;
    gameMedias?: shared.GameMedia[];
    statusCode: number;
}
