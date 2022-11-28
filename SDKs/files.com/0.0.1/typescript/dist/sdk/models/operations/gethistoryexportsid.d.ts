import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetHistoryExportsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetHistoryExportsIdRequest extends SpeakeasyBase {
    pathParams: GetHistoryExportsIdPathParams;
}
export declare class GetHistoryExportsIdResponse extends SpeakeasyBase {
    contentType: string;
    historyExportEntity?: shared.HistoryExportEntity;
    statusCode: number;
}
