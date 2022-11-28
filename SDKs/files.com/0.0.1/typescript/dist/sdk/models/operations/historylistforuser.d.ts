import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HistoryListForUserPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class HistoryListForUserQueryParams extends SpeakeasyBase {
    cursor?: string;
    display?: string;
    endAt?: Date;
    perPage?: number;
    sortBy?: Map<string, any>;
    startAt?: Date;
}
export declare class HistoryListForUserRequest extends SpeakeasyBase {
    pathParams: HistoryListForUserPathParams;
    queryParams: HistoryListForUserQueryParams;
}
export declare class HistoryListForUserResponse extends SpeakeasyBase {
    actionEntities?: shared.ActionEntity[];
    contentType: string;
    statusCode: number;
}
