import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HistoryListForFolderPathParams extends SpeakeasyBase {
    path: string;
}
export declare class HistoryListForFolderQueryParams extends SpeakeasyBase {
    cursor?: string;
    display?: string;
    endAt?: Date;
    perPage?: number;
    sortBy?: Map<string, any>;
    startAt?: Date;
}
export declare class HistoryListForFolderRequest extends SpeakeasyBase {
    pathParams: HistoryListForFolderPathParams;
    queryParams: HistoryListForFolderQueryParams;
}
export declare class HistoryListForFolderResponse extends SpeakeasyBase {
    actionEntities?: shared.ActionEntity[];
    contentType: string;
    statusCode: number;
}
