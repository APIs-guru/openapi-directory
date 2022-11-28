import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostInboxRecipientsRequestBody extends SpeakeasyBase {
    company?: string;
    inboxId: number;
    name?: string;
    note?: string;
    recipient: string;
    shareAfterCreate?: boolean;
    userId?: number;
}
export declare class PostInboxRecipientsRequest extends SpeakeasyBase {
    request?: PostInboxRecipientsRequestBody;
}
export declare class PostInboxRecipientsResponse extends SpeakeasyBase {
    contentType: string;
    inboxRecipientEntity?: shared.InboxRecipientEntity;
    statusCode: number;
}
