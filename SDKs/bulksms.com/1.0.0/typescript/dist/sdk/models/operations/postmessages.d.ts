import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMessagesQueryParams extends SpeakeasyBase {
    autoUnicode?: boolean;
    deduplicationId?: number;
    scheduleDate?: Date;
    scheduleDescription?: string;
}
export declare class PostMessagesSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostMessagesRequest extends SpeakeasyBase {
    queryParams: PostMessagesQueryParams;
    request: shared.SubmissionEntry[];
    security: PostMessagesSecurity;
}
export declare class PostMessagesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    messages?: shared.Message[];
    statusCode: number;
}
