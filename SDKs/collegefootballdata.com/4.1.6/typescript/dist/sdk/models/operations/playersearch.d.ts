import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PlayerSearchQueryParams extends SpeakeasyBase {
    position?: string;
    searchTerm: string;
    team?: string;
    year?: number;
}
export declare class PlayerSearchRequest extends SpeakeasyBase {
    queryParams: PlayerSearchQueryParams;
}
export declare class PlayerSearchResponse extends SpeakeasyBase {
    contentType: string;
    playerSearchResults?: shared.PlayerSearchResult[];
    statusCode: number;
}
