import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostActionNotificationExportsRequestBody extends SpeakeasyBase {
    endAt?: Date;
    queryFolder?: string;
    queryMessage?: string;
    queryPath?: string;
    queryRequestMethod?: string;
    queryRequestUrl?: string;
    queryStatus?: string;
    querySuccess?: boolean;
    startAt?: Date;
    userId?: number;
}
export declare class PostActionNotificationExportsRequest extends SpeakeasyBase {
    request?: PostActionNotificationExportsRequestBody;
}
export declare class PostActionNotificationExportsResponse extends SpeakeasyBase {
    actionNotificationExportEntity?: shared.ActionNotificationExportEntity;
    contentType: string;
    statusCode: number;
}
