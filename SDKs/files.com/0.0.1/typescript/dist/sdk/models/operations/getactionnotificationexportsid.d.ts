import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetActionNotificationExportsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetActionNotificationExportsIdRequest extends SpeakeasyBase {
    pathParams: GetActionNotificationExportsIdPathParams;
}
export declare class GetActionNotificationExportsIdResponse extends SpeakeasyBase {
    actionNotificationExportEntity?: shared.ActionNotificationExportEntity;
    contentType: string;
    statusCode: number;
}
