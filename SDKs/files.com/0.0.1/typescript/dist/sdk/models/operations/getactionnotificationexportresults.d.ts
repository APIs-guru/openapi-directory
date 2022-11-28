import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetActionNotificationExportResultsQueryParams extends SpeakeasyBase {
    actionNotificationExportId: number;
    cursor?: string;
    perPage?: number;
    userId?: number;
}
export declare class GetActionNotificationExportResultsRequest extends SpeakeasyBase {
    queryParams: GetActionNotificationExportResultsQueryParams;
}
export declare class GetActionNotificationExportResultsResponse extends SpeakeasyBase {
    actionNotificationExportResultEntities?: shared.ActionNotificationExportResultEntity[];
    contentType: string;
    statusCode: number;
}
