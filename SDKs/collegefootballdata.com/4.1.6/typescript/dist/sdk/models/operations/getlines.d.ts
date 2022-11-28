import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinesQueryParams extends SpeakeasyBase {
    away?: string;
    conference?: string;
    gameId?: number;
    home?: string;
    seasonType?: string;
    team?: string;
    week?: number;
    year?: number;
}
export declare class GetLinesRequest extends SpeakeasyBase {
    queryParams: GetLinesQueryParams;
}
export declare class GetLinesResponse extends SpeakeasyBase {
    contentType: string;
    gameLines?: shared.GameLines[];
    statusCode: number;
}
