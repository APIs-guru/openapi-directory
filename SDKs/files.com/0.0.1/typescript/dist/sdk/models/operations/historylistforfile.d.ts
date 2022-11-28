import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HistoryListForFilePathParams extends SpeakeasyBase {
    path: string;
}
export declare class HistoryListForFileQueryParams extends SpeakeasyBase {
    cursor?: string;
    display?: string;
    endAt?: Date;
    perPage?: number;
    sortBy?: Map<string, any>;
    startAt?: Date;
}
export declare class HistoryListForFileRequest extends SpeakeasyBase {
    pathParams: HistoryListForFilePathParams;
    queryParams: HistoryListForFileQueryParams;
}
export declare class HistoryListForFileResponse extends SpeakeasyBase {
    actionEntities?: shared.ActionEntity[];
    contentType: string;
    statusCode: number;
}
