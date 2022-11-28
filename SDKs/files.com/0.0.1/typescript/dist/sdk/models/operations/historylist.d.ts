import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HistoryListQueryParams extends SpeakeasyBase {
    cursor?: string;
    display?: string;
    endAt?: Date;
    filter?: Map<string, any>;
    filterGt?: Map<string, any>;
    filterGteq?: Map<string, any>;
    filterLike?: Map<string, any>;
    filterLt?: Map<string, any>;
    filterLteq?: Map<string, any>;
    perPage?: number;
    sortBy?: Map<string, any>;
    startAt?: Date;
}
export declare class HistoryListRequest extends SpeakeasyBase {
    queryParams: HistoryListQueryParams;
}
export declare class HistoryListResponse extends SpeakeasyBase {
    actionEntities?: shared.ActionEntity[];
    contentType: string;
    statusCode: number;
}
