import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HistoryListLoginsQueryParams extends SpeakeasyBase {
    cursor?: string;
    display?: string;
    endAt?: Date;
    perPage?: number;
    sortBy?: Map<string, any>;
    startAt?: Date;
}
export declare class HistoryListLoginsRequest extends SpeakeasyBase {
    queryParams: HistoryListLoginsQueryParams;
}
export declare class HistoryListLoginsResponse extends SpeakeasyBase {
    actionEntities?: shared.ActionEntity[];
    contentType: string;
    statusCode: number;
}
