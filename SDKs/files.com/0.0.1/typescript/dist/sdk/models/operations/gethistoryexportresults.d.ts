import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHistoryExportResultsQueryParams extends SpeakeasyBase {
    cursor?: string;
    historyExportId: number;
    perPage?: number;
    userId?: number;
}
export declare class GetHistoryExportResultsRequest extends SpeakeasyBase {
    queryParams: GetHistoryExportResultsQueryParams;
}
export declare class GetHistoryExportResultsResponse extends SpeakeasyBase {
    contentType: string;
    historyExportResultEntities?: shared.HistoryExportResultEntity[];
    statusCode: number;
}
